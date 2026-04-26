export type ProjectStatus = 'healthy' | 'deploying' | 'degraded' | 'failed'
export type DeploymentStatus = 'success' | 'running' | 'failed' | 'canceled'
export type AlertLevel = 'critical' | 'warning' | 'info'

export interface Project {
    id: string
    name: string
    status: ProjectStatus
    lastDeploy: string
    environment: string
    description: string
}

export interface DeploymentStep {
    id: string
    name: string
    status: 'pending' | 'running' | 'success' | 'failed'
    duration?: string
    logs?: string[]
}

export interface Deployment {
    id: string
    projectId: string
    branch: string
    commit: string
    author: string
    status: DeploymentStatus
    duration: string
    createdAt: string
    steps?: DeploymentStep[]
}

export interface LogEntry {
    timestamp: string
    level: 'INFO' | 'DEBUG' | 'SUCCESS' | 'WARN' | 'ERROR'
    message: string
}

export interface Alert {
    id: string
    level: AlertLevel
    message: string
    timestamp: string
    source: string
}

export const MOCK_PROJECTS: Project[] = [
    {
        id: 'proj-72a6d8f',
        name: 'api-gateway-v2',
        status: 'healthy',
        lastDeploy: '2024-04-26T10:30:00Z',
        environment: 'Production',
        description: 'Main entry point for all client requests, handles routing and auth.',
    },
    {
        id: 'proj-b91e17e',
        name: 'auth-service-node',
        status: 'deploying',
        lastDeploy: '2024-04-26T13:45:00Z',
        environment: 'Production',
        description: 'OAuth2 and JWT authentication provider.',
    },
    {
        id: 'proj-a4f5f5d',
        name: 'payment-processor',
        status: 'degraded',
        lastDeploy: '2024-04-25T16:20:00Z',
        environment: 'Staging',
        description: 'Stripe integration and transaction management.',
    },
    {
        id: 'proj-c7a5925',
        name: 'notification-engine',
        status: 'healthy',
        lastDeploy: '2024-04-26T09:15:00Z',
        environment: 'Production',
        description: 'Email, SMS and Push notification dispatcher.',
    },
]

export const MOCK_DEPLOYMENTS: Deployment[] = [
    {
        id: 'dep-8912',
        projectId: 'proj-72a6d8f',
        branch: 'main',
        commit: 'a1b2c3d',
        author: 'Alex Rivera',
        status: 'success',
        duration: '2m 14s',
        createdAt: '2024-04-26T14:22:00Z',
        steps: [
            {
                id: '1',
                name: 'Initialize Environment',
                status: 'success',
                duration: '5s',
                logs: ['Setting up build container...', 'System ready.'],
            },
            {
                id: '2',
                name: 'Fetch Source Code',
                status: 'success',
                duration: '12s',
                logs: ['Cloning repository...', 'Checked out commit a1b2c3d.'],
            },
            {
                id: '3',
                name: 'Build Docker Image',
                status: 'success',
                duration: '45s',
                logs: ['Step 1/10: FROM node:20-alpine', 'Step 2/10: WORKDIR /app', 'Building...'],
            },
            {
                id: '4',
                name: 'Run Unit Tests',
                status: 'success',
                duration: '30s',
                logs: ['PASS  src/auth.test.ts', 'PASS  src/api.test.ts'],
            },
            {
                id: '5',
                name: 'Deploy to Kubernetes',
                status: 'success',
                duration: '42s',
                logs: ['Applying manifests...', 'Rollout status: success.'],
            },
        ],
    },
    {
        id: 'dep-8911',
        projectId: 'proj-b91e17e',
        branch: 'main',
        commit: 'f9e8d7c',
        author: 'Sarah Chen',
        status: 'failed',
        duration: '45s',
        createdAt: '2024-04-26T12:45:00Z',
        steps: [
            { id: '1', name: 'Initialize Environment', status: 'success', duration: '4s' },
            { id: '2', name: 'Fetch Source Code', status: 'success', duration: '10s' },
            {
                id: '3',
                name: 'Build Docker Image',
                status: 'failed',
                duration: '31s',
                logs: ['ERROR: Failed to fetch dependencies', 'npm ERR! 404 Not Found'],
            },
            { id: '4', name: 'Run Unit Tests', status: 'pending' },
            { id: '5', name: 'Deploy to Kubernetes', status: 'pending' },
        ],
    },
    {
        id: 'dep-8910',
        projectId: 'proj-c3d2b1a',
        branch: 'develop',
        commit: 'e2f1a0b',
        author: 'Marco Rossi',
        status: 'running',
        duration: '1m 05s',
        createdAt: '2024-04-26T16:10:00Z',
        steps: [
            { id: '1', name: 'Initialize Environment', status: 'success', duration: '6s' },
            { id: '2', name: 'Fetch Source Code', status: 'success', duration: '14s' },
            {
                id: '3',
                name: 'Build Docker Image',
                status: 'running',
                duration: '45s',
                logs: ['Step 5/12: COPY . .', 'Step 6/12: RUN npm install', 'Adding 1420 packages...'],
            },
            { id: '4', name: 'Run Unit Tests', status: 'pending' },
            { id: '5', name: 'Deploy to Kubernetes', status: 'pending' },
        ],
    },
    {
        id: 'dep-8909',
        projectId: 'proj-a4f5f5d',
        branch: 'develop',
        commit: 'z4x5c6v',
        author: 'Elena Ross',
        status: 'canceled',
        duration: '12s',
        createdAt: '2024-04-25T08:30:00Z',
    },
    {
        id: 'dep-8908',
        projectId: 'proj-c7a5925',
        branch: 'main',
        commit: 'k8j7h6g',
        author: 'ttcenter',
        status: 'success',
        duration: '3m 05s',
        createdAt: '2024-04-24T16:20:00Z',
    },
    {
        id: 'dep-8907',
        projectId: 'proj-b91e17e',
        branch: 'hotfix/api-leak',
        commit: 'q1w2e3r',
        author: 'Sarah Chen',
        status: 'success',
        duration: '1m 20s',
        createdAt: '2024-04-24T11:15:00Z',
    },
    {
        id: 'dep-8906',
        projectId: 'proj-72a6d8f',
        branch: 'feat/new-auth',
        commit: 'p0o9i8u',
        author: 'Marcus Vogt',
        status: 'failed',
        duration: '2m 50s',
        createdAt: '2024-04-23T15:40:00Z',
    },
    {
        id: 'dep-8905',
        projectId: 'proj-a4f5f5d',
        branch: 'main',
        commit: 'y7t6r5e',
        author: 'Elena Ross',
        status: 'success',
        duration: '2m 12s',
        createdAt: '2024-04-23T10:05:00Z',
    },
]

export const MOCK_LOGS: LogEntry[] = [
    { timestamp: '2024-04-26 13:50:17', level: 'INFO', message: 'Initializing application...' },
    {
        timestamp: '2024-04-26 13:50:18',
        level: 'DEBUG',
        message: 'Connecting to database at postgres://localhost:5432',
    },
    { timestamp: '2024-04-26 13:50:19', level: 'SUCCESS', message: 'Server running on port 3000' },
    { timestamp: '2024-04-26 13:51:02', level: 'WARN', message: 'High memory usage detected (85%)' },
    { timestamp: '2024-04-26 13:52:45', level: 'INFO', message: 'Incoming request: GET /api/v1/health' },
    { timestamp: '2024-04-26 13:53:10', level: 'ERROR', message: 'Failed to fetch external resource: Timeout' },
]

export const MOCK_ALERTS: Alert[] = [
    {
        id: 'alt-1',
        level: 'critical',
        message: 'CPU Usage exceeded 90% on node-01',
        timestamp: '2024-04-26T13:51:00Z',
        source: 'monitoring-agent',
    },
    {
        id: 'alt-2',
        level: 'warning',
        message: 'SSL Certificate expiring in 3 days',
        timestamp: '2024-04-26T08:00:00Z',
        source: 'security-scanner',
    },
    {
        id: 'alt-3',
        level: 'info',
        message: 'New deployment successfully rolled out to 100% of traffic',
        timestamp: '2024-04-26T10:35:00Z',
        source: 'deployment-manager',
    },
]
