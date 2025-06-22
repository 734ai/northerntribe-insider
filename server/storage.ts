import { 
  users, 
  threatReports, 
  newsletterSubscriptions,
  type User, 
  type InsertUser,
  type ThreatReport,
  type InsertThreatReport,
  type NewsletterSubscription,
  type InsertNewsletterSubscription
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getThreatReports(): Promise<ThreatReport[]>;
  getThreatReportById(id: number): Promise<ThreatReport | undefined>;
  createThreatReport(report: InsertThreatReport): Promise<ThreatReport>;
  incrementThreatReportViews(id: number): Promise<void>;
  
  getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private threatReports: Map<number, ThreatReport>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private currentUserId: number;
  private currentThreatReportId: number;
  private currentNewsletterSubscriptionId: number;

  constructor() {
    this.users = new Map();
    this.threatReports = new Map();
    this.newsletterSubscriptions = new Map();
    this.currentUserId = 1;
    this.currentThreatReportId = 1;
    this.currentNewsletterSubscriptionId = 1;
    
    // Add sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample threat reports
    const sampleReports: ThreatReport[] = [
      {
        id: 1,
        title: "APT29 Deploys New Backdoor in Government Infrastructure Attack",
        content: "Russian state-sponsored group APT29 has been observed using a previously unknown backdoor targeting critical government infrastructure across Eastern Europe. The malware exhibits advanced evasion techniques...",
        severity: "CRITICAL",
        tags: ["APT29", "Government", "Backdoor", "Eastern Europe"],
        authorId: 1,
        views: 1247,
        published: true,
        createdAt: new Date("2024-01-15T10:00:00Z"),
      },
      {
        id: 2,
        title: "AI-Powered Phishing Campaigns Increase by 300% in Q4 2024",
        content: "Security researchers have identified a dramatic surge in AI-generated phishing emails that demonstrate unprecedented sophistication in social engineering techniques...",
        severity: "HIGH",
        tags: ["AI", "Phishing", "Social Engineering", "Q4 2024"],
        authorId: 1,
        views: 892,
        published: true,
        createdAt: new Date("2024-01-10T14:30:00Z"),
      },
      {
        id: 3,
        title: "Deep Dive: Satellite Communication Vulnerabilities in Modern Infrastructure",
        content: "Our comprehensive analysis reveals critical security gaps in satellite communication protocols used by major telecommunications providers, exposing potential attack vectors...",
        severity: "MEDIUM",
        tags: ["Satellite", "Communication", "Infrastructure", "Analysis"],
        authorId: 1,
        views: 2156,
        published: true,
        createdAt: new Date("2024-01-05T09:15:00Z"),
      }
    ];

    sampleReports.forEach(report => {
      this.threatReports.set(report.id, report);
      if (report.id >= this.currentThreatReportId) {
        this.currentThreatReportId = report.id + 1;
      }
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id, 
      isAdmin: false,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  async getThreatReports(): Promise<ThreatReport[]> {
    return Array.from(this.threatReports.values())
      .filter(report => report.published)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async getThreatReportById(id: number): Promise<ThreatReport | undefined> {
    const report = this.threatReports.get(id);
    return report?.published ? report : undefined;
  }

  async createThreatReport(insertReport: InsertThreatReport): Promise<ThreatReport> {
    const id = this.currentThreatReportId++;
    const report: ThreatReport = {
      ...insertReport,
      id,
      authorId: 1, // Default author
      views: 0,
      published: true,
      createdAt: new Date()
    };
    this.threatReports.set(id, report);
    return report;
  }

  async incrementThreatReportViews(id: number): Promise<void> {
    const report = this.threatReports.get(id);
    if (report) {
      report.views = (report.views || 0) + 1;
      this.threatReports.set(id, report);
    }
  }

  async getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values()).find(
      (subscription) => subscription.email === email,
    );
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = this.currentNewsletterSubscriptionId++;
    const subscription: NewsletterSubscription = {
      ...insertSubscription,
      id,
      isActive: true,
      createdAt: new Date()
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }
}

export const storage = new MemStorage();
