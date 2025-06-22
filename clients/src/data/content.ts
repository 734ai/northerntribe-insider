export interface ThreatReport {
  id: string;
  title: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  timeAgo: string;
  excerpt: string;
  views: number;
  comments: number;
  tags: string[];
}

export interface AIInsight {
  id: string;
  title: string;
  excerpt: string;
  timeAgo: string;
  status: 'Trending' | 'Breaking' | 'Research';
}

export interface LiveFeedItem {
  id: string;
  message: string;
  timeAgo: string;
  severity: 'critical' | 'warning' | 'info' | 'success';
}

export const threatReports: ThreatReport[] = [
  {
    id: '1',
    title: 'APT29 Deploys New Backdoor in Government Infrastructure Attack',
    severity: 'CRITICAL',
    timeAgo: '2 hours ago',
    excerpt: 'Russian state-sponsored group APT29 has been observed using a previously unknown backdoor targeting critical government infrastructure across Eastern Europe. The malware exhibits advanced evasion techniques...',
    views: 1247,
    comments: 34,
    tags: ['APT29', 'Government', 'Backdoor', 'Eastern Europe']
  },
  {
    id: '2',
    title: 'AI-Powered Phishing Campaigns Increase by 300% in Q4 2024',
    severity: 'HIGH',
    timeAgo: '5 hours ago',
    excerpt: 'Security researchers have identified a dramatic surge in AI-generated phishing emails that demonstrate unprecedented sophistication in social engineering techniques...',
    views: 892,
    comments: 21,
    tags: ['AI', 'Phishing', 'Social Engineering', 'Q4 2024']
  },
  {
    id: '3',
    title: 'Deep Dive: Satellite Communication Vulnerabilities in Modern Infrastructure',
    severity: 'MEDIUM',
    timeAgo: '1 day ago',
    excerpt: 'Our comprehensive analysis reveals critical security gaps in satellite communication protocols used by major telecommunications providers, exposing potential attack vectors...',
    views: 2156,
    comments: 67,
    tags: ['Satellite', 'Communication', 'Infrastructure', 'Analysis']
  }
];

export const aiInsights: AIInsight[] = [
  {
    id: '1',
    title: 'Machine Learning Detection of Zero-Day Exploits',
    excerpt: 'New neural network architecture shows 94% accuracy in identifying previously unknown attack patterns...',
    timeAgo: '3 hours ago',
    status: 'Trending'
  },
  {
    id: '2',
    title: 'Quantum Computing Threatens Current Encryption',
    excerpt: "IBM's latest quantum breakthrough brings cryptographic vulnerabilities closer to reality...",
    timeAgo: '6 hours ago',
    status: 'Breaking'
  },
  {
    id: '3',
    title: 'Deepfake Detection Algorithms Evolve',
    excerpt: 'Latest advances in adversarial training improve detection rates of sophisticated deepfakes...',
    timeAgo: '12 hours ago',
    status: 'Research'
  }
];

export const liveFeedItems: LiveFeedItem[] = [
  {
    id: '1',
    message: 'New IOCs detected from Lazarus Group campaign',
    timeAgo: '2 min ago',
    severity: 'critical'
  },
  {
    id: '2',
    message: 'CVE-2024-7321 exploitation attempts increasing',
    timeAgo: '5 min ago',
    severity: 'warning'
  },
  {
    id: '3',
    message: 'Microsoft patches critical Exchange vulnerability',
    timeAgo: '15 min ago',
    severity: 'success'
  },
  {
    id: '4',
    message: 'New ransomware variant targets healthcare sector',
    timeAgo: '23 min ago',
    severity: 'info'
  }
];
