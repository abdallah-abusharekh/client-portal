import { Project } from "../../projects/types/project.types";

export type UserRole = "freelancer" | "customer" | "admin";

export interface BaseUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
  jobTitle?: string;
  bio?: string;
  status?: "active" | "suspended";
}

export interface FreelancerUser extends BaseUser {
  role: "freelancer";
  projects: Project[];
  totalEarnings: number;
  activeContracts: number;
}

export interface CustomerUser extends BaseUser {
  role: "customer";
  companyName: string;
  projects: Project[];
  totalSpent: number;
}

export interface AdminUser extends BaseUser {
  role: "admin";
  totalUsers: number;
  totalProjects: number;
  systemRevenue: number;
}

export type AppUser = FreelancerUser | CustomerUser | AdminUser;
