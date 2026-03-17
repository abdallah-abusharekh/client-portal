import { projectsMock } from "../../projects/mocks/projects.mock";
import {
  FreelancerUser,
  CustomerUser,
  AdminUser,
  UserRole,
} from "../types/user.types";

export const freelancerUser: FreelancerUser = {
  id: "u1",
  name: "Alex Johnson",
  email: "alex@freelance.com",
  role: "freelancer",
  avatarUrl: "/avatars/freelancer.png",
  createdAt: "2025-01-10",

  projects: projectsMock,
  totalEarnings: 24500,
  activeContracts: 3,
};

export const customerUser: CustomerUser = {
  id: "u2",
  name: "Sarah Lee",
  email: "sarah@company.com",
  role: "customer",
  avatarUrl: "/avatars/customer.png",
  createdAt: "2025-02-15",

  companyName: "Bright Studio",
  projects: projectsMock,
  totalSpent: 42000,
};

export const adminUser: AdminUser = {
  id: "u3",
  name: "System Admin",
  email: "admin@portal.com",
  role: "admin",
  avatarUrl: "/avatars/admin.png",
  createdAt: "2024-12-01",

  totalUsers: 128,
  totalProjects: 56,
  systemRevenue: 325000,
};

export const DEMO_CREDENTIALS: Record<
  UserRole,
  { email: string; password: string }
> = {
  freelancer: {
    email: "alex@freelance.com",
    password: "password123",
  },
  customer: {
    email: "sarah@company.com",
    password: "password123",
  },
  admin: {
    email: "admin@portal.com",
    password: "password123",
  },
};
