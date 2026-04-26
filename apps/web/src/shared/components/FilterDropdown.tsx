'use client'

import React, { useMemo, useState } from 'react'
import { Button } from '@workspace/ui/components/Button'
import { Popover, PopoverTrigger } from '@workspace/ui/components/Popover'
import { BsSearchField } from '@workspace/ui/components/Searchfield'
import { Checkbox } from '@workspace/ui/components/Checkbox'
import { CirclePlus, Loader2, XIcon } from 'lucide-react'
import { cn } from '@workspace/ui/lib/utils'
import { Placement } from 'react-aria'

export interface FilterOption {
    id: string
    name: string
}

export interface FilterDropdownProps {
    placeholder: string
    options: FilterOption[]
    selectedValues: string[]
    onChange: (values: string[]) => void
    className?: string
    containerClassName?: string
    iconClassName?: string
    inputPlaceholder?: string
    placement?: Placement
    icon?: React.ComponentType<{ className?: string }>
    showSelectedItems?: boolean
    setOpen?: (open: boolean) => void
    isLoading?: boolean
    searchable?: boolean
    label?: string
}

export function FilterDropdown({
    placeholder,
    options,
    selectedValues,
    onChange,
    className,
    containerClassName,
    iconClassName,
    inputPlaceholder = 'Search...',
    placement = 'bottom start',
    icon: Icon = CirclePlus,
    showSelectedItems = true,
    setOpen: externalSetOpen,
    isLoading = false,
    searchable = true,
    label,
}: FilterDropdownProps) {
    const [open, setInternalOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const setOpen = (value: boolean) => {
        setInternalOpen(value)
        externalSetOpen?.(value)
    }

    const filteredOptions = useMemo(() => {
        return options.filter(option => option.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [options, searchTerm])

    const handleToggle = (id: string) => {
        const newValues = selectedValues.includes(id) ? selectedValues.filter(v => v !== id) : [...selectedValues, id]
        onChange(newValues)
    }

    const handleSelectAll = () => {
        onChange(options.map(o => o.id))
    }

    const handleClear = () => {
        onChange([])
    }

    return (
        <PopoverTrigger>
            <Button
                variant="outline"
                className={cn(
                    'h-9 justify-start gap-2 px-3 font-normal hover:bg-accent/50 transition-all border-dashed border-2 hover:border-solid',
                    selectedValues.length > 0 && 'bg-accent/30 border-solid border-primary/30',
                    className,
                )}
            >
                <Icon className={cn('size-4 text-muted-foreground', iconClassName)} />
                <span className="text-sm">{label || placeholder}</span>
                {selectedValues.length > 0 && (
                    <div className="flex items-center gap-1 ml-1">
                        <div className="h-4 w-px bg-border mx-1" />
                        <div className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            {selectedValues.length}
                        </div>
                    </div>
                )}
            </Button>
            <Popover placement={placement} className={cn('w-64 p-0 overflow-hidden', containerClassName)}>
                <div className="flex flex-col h-full max-h-[400px]">
                    {searchable && (
                        <div className="p-2 border-b bg-muted/30">
                            <BsSearchField
                                placeholder={inputPlaceholder}
                                value={searchTerm}
                                onChange={setSearchTerm}
                                className="h-8 bg-background"
                            />
                        </div>
                    )}

                    <div className="flex-1 overflow-y-auto p-1 custom-scrollbar">
                        {isLoading ? (
                            <div className="flex items-center justify-center py-8">
                                <Loader2 className="size-5 animate-spin text-muted-foreground" />
                            </div>
                        ) : filteredOptions.length > 0 ? (
                            <div className="space-y-0.5">
                                {filteredOptions.map(option => (
                                    <div
                                        key={option.id}
                                        onClick={() => handleToggle(option.id)}
                                        className={cn(
                                            'flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors hover:bg-accent',
                                            selectedValues.includes(option.id) && 'bg-accent/50',
                                        )}
                                    >
                                        <Checkbox isSelected={selectedValues.includes(option.id)} />
                                        <span className="text-sm truncate">{option.name}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-8 text-center">
                                <p className="text-xs text-muted-foreground italic">No results found</p>
                            </div>
                        )}
                    </div>

                    <div className="p-2 border-t bg-muted/30 flex items-center justify-between gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-[11px] px-2 font-medium hover:bg-primary/5 hover:text-primary transition-colors"
                            onClick={handleSelectAll}
                        >
                            Select All
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-[11px] px-2 font-medium text-destructive hover:bg-destructive/5 transition-colors"
                            onClick={handleClear}
                            isDisabled={selectedValues.length === 0}
                        >
                            Clear
                        </Button>
                    </div>
                </div>
            </Popover>
        </PopoverTrigger>
    )
}
