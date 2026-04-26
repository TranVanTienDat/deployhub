export interface IPlatformProvider {
  readonly type: string;

  /**
   * Kiểm tra xem token có hợp lệ không
   */
  validateToken(token: string): Promise<boolean>;

  /**
   * Lấy thông tin profile/owner của account
   */
  getProfile(token: string): Promise<any>;

  /**
   * Lấy danh sách projects/services (Sẽ mở rộng sau)
   */
  getProjects(token: string): Promise<any[]>;
}
