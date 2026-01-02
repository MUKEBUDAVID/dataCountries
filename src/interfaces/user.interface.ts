export interface IUser {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    company?: string;
    plan?: 'free' | 'basic' | 'premium';
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface ApiKey {
    key: string;
    user: string;
    plan: 'free' | 'basic' | 'premium';
    requests: number;
    expiresAt: Date;
    active: boolean;
  }