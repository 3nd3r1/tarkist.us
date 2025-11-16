// ============================================================================
// Mock API Client - Ready for Backend Integration
// Contains sample assessments for Slack, GitHub, Signal, and Jira
// ============================================================================

import { Assessment, DashboardStats } from './types';

// Mock delay to simulate API calls
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ============================================================================
// Mock Assessment Data (§15 - Example Targets)
// ============================================================================

const mockAssessments: Assessment[] = [
  {
    id: 'slack-001',
    timestamp: '2025-11-14T10:30:00Z',
    cached: false,
    product: {
      name: 'Slack',
      vendor: 'Salesforce',
      category: 'Team Collaboration',
      description: 'Cloud-based team communication and collaboration platform with channels, direct messaging, and extensive integrations.',
      usage: 'Internal team communication, project coordination, file sharing, workflow automation',
      website: 'https://slack.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg'
    },
    trustScore: {
      score: 78,
      rationale: 'Strong enterprise features with SOC2 compliance, but concerns around extensive data access and AI training practices.',
      confidence: 85
    },
    vendorInfo: {
      companyName: 'Slack Technologies (Salesforce)',
      headquarters: 'San Francisco, CA, USA',
      jurisdiction: 'United States',
      founded: 2013,
      reputation: {
        score: 82,
        summary: 'Well-established enterprise communication platform with strong security posture, acquired by Salesforce in July 2021.',
        sources: [
          { id: 'c1', type: 'independent', title: 'Gartner Magic Quadrant', verified: true, date: '2025-01' }
        ]
      },
      securityTrackRecord: 'Good track record with no major breaches. Transparent security practices.',
      psirtPage: 'https://slack.com/security'
    },
    platformSupport: {
      platforms: [
        { name: 'macOS', supported: true, versions: '11.0+ (Big Sur)', securityModel: 'Sandboxed app with hardened runtime' },
        { name: 'Windows', supported: true, versions: '10+ / Windows 11', securityModel: 'Standard application with code signing' },
        { name: 'Linux', supported: true, versions: 'Ubuntu 20.04+, Fedora 34+, Debian 11+', securityModel: 'AppImage/Snap with sandboxing' },
        { name: 'iOS', supported: true, versions: '15.0+', securityModel: 'App Sandbox with strict permissions' },
        { name: 'Android', supported: true, versions: '8.0+ (API 26+)', securityModel: 'Android permissions with runtime checks' },
        { name: 'Web', supported: true, securityModel: 'Browser-based with CSP and secure headers' }
      ],
      versionDifferences: 'All platforms feature-parity. Mobile apps have biometric authentication and secure enclave integration.'
    },
    dataHandling: {
      storage: {
        location: 'AWS (US East, EU West)',
        regions: ['US', 'EU', 'AU', 'JP'],
        cloudProvider: 'Amazon Web Services',
        encryptionAtRest: true
      },
      transmission: {
        endpoints: ['slack.com', 'slack-edge.com', 'slack-files.com'],
        subProcessors: ['AWS', 'Google Cloud', 'Cloudflare'],
        encryptionInTransit: { tls: 'TLS 1.3', certVerified: true }
      },
      usage: {
        analytics: true,
        advertising: false,
        aiTraining: true,
        retentionPolicy: 'Configurable retention (14 days to unlimited)',
        userCanDelete: true
      }
    },
    permissions: {
      required: [
        { name: 'Internet Access', riskLevel: 'low', justification: 'Cloud-based communication' },
        { name: 'File System (Downloads)', riskLevel: 'medium', justification: 'File sharing and downloads' },
        { name: 'Notifications', riskLevel: 'low', justification: 'Message alerts' }
      ],
      optional: [
        { name: 'Microphone', riskLevel: 'medium', justification: 'Voice calls and clips' },
        { name: 'Camera', riskLevel: 'medium', justification: 'Video calls' },
        { name: 'Screen Recording', riskLevel: 'high', justification: 'Screen sharing in calls' }
      ],
      overPermissioningRisk: 'Screen recording permission is broad; consider if necessary for your use case.'
    },
    adminControls: {
      sso: true,
      mfa: true,
      rbac: true,
      scim: true,
      auditLogs: true,
      dataExport: true
    },
    vulnerabilities: {
      cveCount: 8,
      trendData: [
        { month: '2025-01', count: 1 },
        { month: '2025-02', count: 0 },
        { month: '2025-03', count: 2 },
        { month: '2025-04', count: 1 },
        { month: '2025-05', count: 0 },
        { month: '2025-06', count: 1 },
        { month: '2025-07', count: 0 },
        { month: '2025-08', count: 1 },
        { month: '2025-09', count: 0 },
        { month: '2025-10', count: 2 },
        { month: '2025-11', count: 0 },
        { month: '2025-12', count: 0 }
      ],
      severityBreakdown: {
        critical: 0,
        high: 2,
        medium: 4,
        low: 2
      },
      recentCVEs: [
        {
          id: 'CVE-2025-23456',
          cvss: 7.1,
          severity: 'High',
          description: 'XSS vulnerability in message rendering',
          publishedDate: '2025-10-15',
          patched: true
        },
        {
          id: 'CVE-2025-12345',
          cvss: 5.3,
          severity: 'Medium',
          description: 'Information disclosure in API responses',
          publishedDate: '2025-10-01',
          patched: true
        }
      ],
      cisaKEV: false
    },
    releaseLifecycle: {
      latestVersion: '4.47.59',
      releaseFrequency: 'Weekly updates',
      patchCadence: 'Critical patches within 48h, regular updates weekly',
      eolDates: [
        { version: '3.x', date: '2023-12-31' },
        { version: '2.x', date: '2022-06-30' }
      ],
      ltsVersions: ['4.x'],
      versionHistory: [
        { version: '4.47.59', releaseDate: '2025-11-10', securityFixes: 0 },
        { version: '4.46.104', releaseDate: '2025-10-21', securityFixes: 0 },
        { version: '4.46.99', releaseDate: '2025-09-22', securityFixes: 1 }
      ]
    },
    aiFeatures: {
      hasAI: true,
      features: [
        {
          name: 'Slack AI',
          description: 'Thread summaries, channel recaps, search answers, and intelligent message composition',
          dataAccess: ['messages', 'files', 'channel history', 'workspace context']
        },
        {
          name: 'Smart Suggestions',
          description: 'Auto-complete, emoji suggestions, and contextual recommendations',
          dataAccess: ['message content', 'emoji usage', 'user behavior patterns']
        },
        {
          name: 'AI Workflow Builder',
          description: 'Automated workflow generation and optimization suggestions',
          dataAccess: ['workflow patterns', 'integration usage', 'automation history']
        }
      ],
      dataUsedForTraining: true,
      canOptOut: true,
      processingLocation: 'cloud'
    },
    incidents: {
      count: 2,
      timeline: [
        {
          date: '2022-12-31',
          title: 'Service Outage',
          severity: 'Medium',
          description: 'Global service disruption affecting message delivery',
          impact: 'Message delays up to 2 hours',
          resolution: 'Infrastructure scaling issue resolved',
          sources: [
            { id: 'i1', type: 'vendor-stated', title: 'Slack Status Page', verified: true, date: '2022-12-31' }
          ]
        },
        {
          date: '2021-03-15',
          title: 'Password Reset Vulnerability',
          severity: 'High',
          description: 'Account takeover risk via password reset flow',
          impact: 'Potential unauthorized access',
          resolution: 'Fixed within 6 hours, forced password resets',
          sources: [
            { id: 'i2', type: 'independent', title: 'Security Researcher Blog', verified: true, date: '2021-03-16' }
          ]
        }
      ]
    },
    compliance: {
      certifications: ['SOC 2 Type II', 'ISO 27001', 'ISO 27018', 'GDPR Compliant', 'HIPAA (Business Associate Agreement available)'],
      dataHandlingSummary: 'Enterprise-grade data protection with encryption at rest and in transit. GDPR-compliant with EU data residency options.',
      dpa: true,
      sources: [
        { id: 'comp1', type: 'compliance-cert', title: 'SOC 2 Report', verified: true, date: '2025-06' },
        { id: 'comp2', type: 'vendor-stated', title: 'Slack Trust Center', verified: true }
      ]
    },
    sources: {
      public: {
        count: 47,
        types: [
          { type: 'Vendor Documentation', count: 18 },
          { type: 'CVE Database', count: 8 },
          { type: 'Security Blogs', count: 12 },
          { type: 'Compliance Reports', count: 9 }
        ]
      },
      confidential: {
        count: 5,
        types: [
          { type: 'Internal Testing', count: 3 },
          { type: 'Pentesting Reports', count: 2 }
        ]
      }
    },
    alternatives: [
      { name: 'Microsoft Teams', vendor: 'Microsoft', trustScore: 85, summary: 'Enterprise collaboration with Office 365 integration', whyBetter: 'Stronger enterprise controls and compliance' },
      { name: 'Discord', vendor: 'Discord Inc.', trustScore: 72, summary: 'Community-focused communication platform', whyBetter: 'Better for communities but less enterprise features' },
      { name: 'Mattermost', vendor: 'Mattermost', trustScore: 88, summary: 'Open-source, self-hosted collaboration', whyBetter: 'Full data control with self-hosting' }
    ],
    allCitations: []
  },
  {
    id: 'github-001',
    timestamp: '2025-11-13T15:20:00Z',
    cached: true,
    product: {
      name: 'GitHub',
      vendor: 'Microsoft',
      category: 'Developer Platform',
      description: 'Cloud-based software development platform providing Git repository hosting, code review, CI/CD, and collaboration tools.',
      usage: 'Version control, code collaboration, issue tracking, DevOps automation',
      website: 'https://github.com',
      logo: 'https://cdn.simpleicons.org/github/181717'
    },
    trustScore: {
      score: 88,
      rationale: 'Excellent security posture with mature vulnerability management, strong compliance, and transparent security practices. Microsoft acquisition brought additional resources.',
      confidence: 92
    },
    vendorInfo: {
      companyName: 'GitHub Inc. (Microsoft)',
      headquarters: 'San Francisco, CA, USA',
      jurisdiction: 'United States',
      founded: 2008,
      reputation: {
        score: 90,
        summary: 'Industry-leading developer platform with strong security culture. Acquired by Microsoft in 2018.',
        sources: [
          { id: 'gh1', type: 'independent', title: 'Stack Overflow Survey 2025', verified: true }
        ]
      },
      securityTrackRecord: 'Excellent. Transparent about security with bug bounty program and public security advisories.',
      psirtPage: 'https://github.com/security'
    },
    platformSupport: {
      platforms: [
        { name: 'macOS', supported: true, versions: 'Any', securityModel: 'Web-based' },
        { name: 'Windows', supported: true, versions: 'Any', securityModel: 'Web-based' },
        { name: 'Linux', supported: true, versions: 'Any', securityModel: 'Web-based' },
        { name: 'iOS', supported: true, versions: '15.0+', securityModel: 'App Sandbox' },
        { name: 'Android', supported: true, versions: '8.0+', securityModel: 'Android permissions' },
        { name: 'Web', supported: true, securityModel: 'Browser-based (primary)' }
      ]
    },
    dataHandling: {
      storage: {
        location: 'Azure (Multiple regions)',
        regions: ['US', 'EU', 'APAC'],
        cloudProvider: 'Microsoft Azure',
        encryptionAtRest: true
      },
      transmission: {
        endpoints: ['github.com', 'api.github.com', 'raw.githubusercontent.com'],
        subProcessors: ['Azure', 'Fastly CDN'],
        encryptionInTransit: { tls: 'TLS 1.3', certVerified: true }
      },
      usage: {
        analytics: true,
        advertising: false,
        aiTraining: true,
        retentionPolicy: 'Indefinite (user-controlled deletion)',
        userCanDelete: true
      }
    },
    permissions: {
      required: [
        { name: 'Internet Access', riskLevel: 'low', justification: 'Cloud-based platform' }
      ],
      optional: [
        { name: 'Repository Access', riskLevel: 'medium', justification: 'OAuth apps and integrations' },
        { name: 'Organization Data', riskLevel: 'high', justification: 'Third-party apps' }
      ],
      overPermissioningRisk: 'Review OAuth app permissions carefully. Many apps request excessive scopes.'
    },
    adminControls: {
      sso: true,
      mfa: true,
      rbac: true,
      scim: true,
      auditLogs: true,
      dataExport: true
    },
    vulnerabilities: {
      cveCount: 12,
      trendData: [
        { month: '2025-01', count: 1 },
        { month: '2025-02', count: 2 },
        { month: '2025-03', count: 1 },
        { month: '2025-04', count: 0 },
        { month: '2025-05', count: 1 },
        { month: '2025-06', count: 2 },
        { month: '2025-07', count: 1 },
        { month: '2025-08', count: 0 },
        { month: '2025-09', count: 1 },
        { month: '2025-10', count: 2 },
        { month: '2025-11', count: 1 },
        { month: '2025-12', count: 0 }
      ],
      severityBreakdown: {
        critical: 1,
        high: 3,
        medium: 5,
        low: 3
      },
      recentCVEs: [
        {
          id: 'CVE-2025-34567',
          cvss: 8.1,
          severity: 'High',
          description: 'Authentication bypass in GitHub Actions',
          publishedDate: '2025-10-20',
          patched: true
        }
      ],
      cisaKEV: false
    },
    releaseLifecycle: {
      latestVersion: 'N/A (SaaS)',
      releaseFrequency: 'Continuous deployment (multiple times daily)',
      patchCadence: 'Immediate for critical issues',
      eolDates: [],
      ltsVersions: [],
      versionHistory: []
    },
    aiFeatures: {
      hasAI: true,
      features: [
        {
          name: 'GitHub Copilot',
          description: 'AI pair programmer for code completion and generation with multi-file context',
          dataAccess: ['code context', 'comments', 'repository structure', 'open files']
        },
        {
          name: 'Copilot Chat',
          description: 'Conversational AI for coding assistance with codebase understanding',
          dataAccess: ['code', 'documentation', 'issues', 'pull requests', 'discussions']
        },
        {
          name: 'Copilot Workspace',
          description: 'AI-powered workspace for planning and implementing features end-to-end',
          dataAccess: ['entire codebase', 'project structure', 'dependencies', 'test files']
        },
        {
          name: 'Copilot Enterprise',
          description: 'Enterprise-grade AI with data isolation and compliance controls',
          dataAccess: ['code within organization', 'private repositories only']
        }
      ],
      dataUsedForTraining: true,
      canOptOut: true,
      processingLocation: 'cloud'
    },
    incidents: {
      count: 1,
      timeline: [
        {
          date: '2020-04-14',
          title: 'OAuth Token Security Issue',
          severity: 'High',
          description: 'Unintended exposure of OAuth tokens in logs',
          impact: 'Limited OAuth token exposure',
          resolution: 'Tokens revoked, logging system updated',
          sources: [
            { id: 'ghi1', type: 'vendor-stated', title: 'GitHub Blog', verified: true, date: '2020-04-14' }
          ]
        }
      ]
    },
    compliance: {
      certifications: ['SOC 2 Type II', 'ISO 27001', 'FedRAMP Moderate', 'GDPR Compliant', 'PCI DSS Level 1'],
      dataHandlingSummary: 'Industry-leading security with comprehensive compliance certifications. Regular third-party audits.',
      dpa: true,
      sources: [
        { id: 'ghc1', type: 'compliance-cert', title: 'GitHub Trust Center', verified: true }
      ]
    },
    sources: {
      public: {
        count: 68,
        types: [
          { type: 'Vendor Documentation', count: 32 },
          { type: 'CVE Database', count: 12 },
          { type: 'Security Advisories', count: 15 },
          { type: 'Compliance Reports', count: 9 }
        ]
      },
      confidential: {
        count: 3,
        types: [
          { type: 'Internal Testing', count: 3 }
        ]
      }
    },
    alternatives: [
      { name: 'GitLab', vendor: 'GitLab Inc.', trustScore: 86, summary: 'Complete DevOps platform with strong security', whyBetter: 'Self-hosting option available' },
      { name: 'Bitbucket', vendor: 'Atlassian', trustScore: 83, summary: 'Git solution integrated with Jira', whyBetter: 'Better Atlassian ecosystem integration' }
    ],
    allCitations: []
  },
  {
    id: 'zoom-001',
    timestamp: '2025-11-12T09:15:00Z',
    cached: false,
    product: {
      name: 'Zoom',
      vendor: 'Zoom Video Communications',
      category: 'Video Conferencing',
      description: 'Video conferencing and online meeting platform with screen sharing, recording, and collaboration features.',
      usage: 'Video meetings, webinars, virtual events, team collaboration',
      website: 'https://zoom.us',
      logo: 'https://cdn.simpleicons.org/zoom/2D8CFF'
    },
    trustScore: {
      score: 79,
      rationale: 'Significantly improved security posture since 2020. End-to-end encryption available for paid plans. Strong compliance certifications and transparent security practices.',
      confidence: 85
    },
    vendorInfo: {
      companyName: 'Zoom Video Communications',
      headquarters: 'San Jose, CA, USA',
      jurisdiction: 'United States',
      founded: 2011,
      reputation: {
        score: 75,
        summary: 'Popular video platform that faced security scrutiny in 2020, has since improved practices significantly.',
        sources: []
      },
      securityTrackRecord: 'Mixed. Significant issues in 2020 (Zoombombing, encryption claims), but major improvements since then.',
      psirtPage: 'https://explore.zoom.us/en/trust/security/'
    },
    platformSupport: {
      platforms: [
        { name: 'macOS', supported: true, versions: '11.0+ (Big Sur)', securityModel: 'Hardened runtime with notarization' },
        { name: 'Windows', supported: true, versions: '10+ / Windows 11', securityModel: 'Code signed with certificate pinning' },
        { name: 'Linux', supported: true, versions: 'Ubuntu 18.04+, RHEL 7+, Debian 10+', securityModel: 'AppImage with sandboxing' },
        { name: 'iOS', supported: true, versions: '13.0+', securityModel: 'App Sandbox with strict permissions' },
        { name: 'Android', supported: true, versions: '7.0+ (API 24+)', securityModel: 'Android permissions with runtime checks' },
        { name: 'Web', supported: true, securityModel: 'Browser-based with E2EE support (paid plans)' }
      ],
      versionDifferences: 'Desktop apps support end-to-end encryption (E2EE) for meetings. Web client has limited E2EE support.'
    },
    dataHandling: {
      storage: {
        location: 'Multiple cloud providers',
        regions: ['US', 'EU', 'APAC'],
        cloudProvider: 'AWS, Oracle Cloud',
        encryptionAtRest: true
      },
      transmission: {
        endpoints: ['zoom.us', 'zoom.com'],
        subProcessors: ['AWS', 'Oracle'],
        encryptionInTransit: { tls: 'TLS 1.2+', certVerified: true }
      },
      usage: {
        analytics: true,
        advertising: false,
        aiTraining: true,
        retentionPolicy: 'Recording retention configurable',
        userCanDelete: true
      }
    },
    permissions: {
      required: [
        { name: 'Camera', riskLevel: 'medium', justification: 'Video calls' },
        { name: 'Microphone', riskLevel: 'medium', justification: 'Audio calls' },
        { name: 'Screen Recording', riskLevel: 'high', justification: 'Screen sharing' }
      ],
      optional: [],
      overPermissioningRisk: 'High permissions required for core functionality'
    },
    adminControls: {
      sso: true,
      mfa: true,
      rbac: true,
      scim: true,
      auditLogs: true,
      dataExport: true
    },
    vulnerabilities: {
      cveCount: 15,
      trendData: Array(12).fill(0).map((_, i) => ({ month: `2025-${String(i + 1).padStart(2, '0')}`, count: Math.floor(Math.random() * 3) })),
      severityBreakdown: {
        critical: 1,
        high: 4,
        medium: 7,
        low: 3
      },
      recentCVEs: [
        {
          id: 'CVE-2025-45678',
          cvss: 7.5,
          severity: 'High',
          description: 'Authentication bypass in Zoom client',
          publishedDate: '2025-09-15',
          patched: true
        }
      ],
      cisaKEV: false
    },
    releaseLifecycle: {
      latestVersion: '6.1.3',
      releaseFrequency: 'Bi-weekly updates',
      patchCadence: 'Critical patches within 24-48h, security updates weekly',
      eolDates: [
        { version: '4.x', date: '2024-12-31' },
        { version: '3.x', date: '2023-06-30' }
      ],
      ltsVersions: ['6.x'],
      versionHistory: [
        { version: '6.1.3', releaseDate: '2025-11-08', securityFixes: 2 },
        { version: '6.1.0', releaseDate: '2025-10-25', securityFixes: 1 },
        { version: '6.0.15', releaseDate: '2025-10-11', securityFixes: 3 }
      ]
    },
    aiFeatures: {
      hasAI: true,
      features: [
        { 
          name: 'Zoom AI Companion', 
          description: 'Meeting summaries, action items, smart recordings, and real-time translation',
          dataAccess: ['meeting transcripts', 'chat', 'audio/video content', 'screen shares']
        },
        {
          name: 'Meeting Insights',
          description: 'AI-powered analytics and engagement metrics',
          dataAccess: ['meeting patterns', 'participation data', 'content analysis']
        },
        {
          name: 'Smart Scheduling',
          description: 'AI assistant for optimal meeting scheduling',
          dataAccess: ['calendar data', 'availability patterns', 'preferences']
        }
      ],
      dataUsedForTraining: true,
      canOptOut: true,
      processingLocation: 'cloud'
    },
    incidents: {
      count: 3,
      timeline: [
        {
          date: '2020-04-01',
          title: 'Zoombombing Incidents',
          severity: 'High',
          description: 'Unauthorized users joining meetings',
          impact: 'Privacy and security concerns',
          resolution: 'Improved default security settings',
          sources: []
        }
      ]
    },
    compliance: {
      certifications: ['SOC 2 Type II', 'ISO 27001', 'ISO 27017', 'ISO 27018', 'HIPAA', 'GDPR Compliant', 'FedRAMP Moderate', 'Common Criteria EAL2'],
      dataHandlingSummary: 'Enterprise-grade data protection with regional storage options, end-to-end encryption available, and comprehensive compliance certifications.',
      dpa: true,
      sources: [
        { id: 'zoom1', type: 'compliance-cert', title: 'Zoom Trust Center', verified: true, date: '2025-09' },
        { id: 'zoom2', type: 'vendor-stated', title: 'Zoom Security White Paper', verified: true, date: '2025-08' }
      ]
    },
    sources: {
      public: { count: 42, types: [{ type: 'Vendor Documentation', count: 20 }, { type: 'Security Research', count: 22 }] },
      confidential: { count: 2, types: [{ type: 'Internal Testing', count: 2 }] }
    },
    alternatives: [
      { name: 'Microsoft Teams', vendor: 'Microsoft', trustScore: 85, summary: 'Enterprise communication platform' }
    ],
    allCitations: []
  },
  {
    id: 'notion-001',
    timestamp: '2025-11-10T14:30:00Z',
    cached: true,
    product: {
      name: 'Notion',
      vendor: 'Notion Labs',
      category: 'Productivity',
      description: 'All-in-one workspace for notes, tasks, wikis, and databases with collaborative features.',
      usage: 'Documentation, project management, knowledge base, personal notes',
      website: 'https://notion.so',
      logo: 'https://cdn.simpleicons.org/notion/000000'
    },
    trustScore: {
      score: 68,
      rationale: 'Growing platform with improving security, but limited enterprise controls and encryption concerns.',
      confidence: 78
    },
    vendorInfo: {
      companyName: 'Notion Labs Inc.',
      headquarters: 'San Francisco, CA, USA',
      jurisdiction: 'United States',
      founded: 2016,
      reputation: {
        score: 72,
        summary: 'Popular productivity tool with strong user base, improving enterprise features.',
        sources: []
      },
      securityTrackRecord: 'Good. No major security incidents reported.',
      psirtPage: 'https://www.notion.so/security'
    },
    platformSupport: {
      platforms: [
        { name: 'macOS', supported: true, versions: '11.0+', securityModel: 'Native app with sandboxing' },
        { name: 'Windows', supported: true, versions: '10+', securityModel: 'Native app with code signing' },
        { name: 'Linux', supported: false },
        { name: 'iOS', supported: true, versions: '15.0+', securityModel: 'App Sandbox' },
        { name: 'Android', supported: true, versions: '8.0+', securityModel: 'Android permissions' },
        { name: 'Web', supported: true, securityModel: 'Browser-based (primary platform)' }
      ],
      versionDifferences: 'Web platform is primary. Desktop apps provide offline access and better performance for large workspaces.'
    },
    dataHandling: {
      storage: {
        location: 'AWS (US)',
        regions: ['US'],
        cloudProvider: 'AWS',
        encryptionAtRest: true
      },
      transmission: {
        endpoints: ['notion.so', 'notion.site'],
        subProcessors: ['AWS'],
        encryptionInTransit: { tls: 'TLS 1.3', certVerified: true }
      },
      usage: {
        analytics: true,
        advertising: false,
        aiTraining: false,
        retentionPolicy: 'Indefinite (user-controlled)',
        userCanDelete: true
      }
    },
    permissions: {
      required: [
        { name: 'Internet Access', riskLevel: 'low', justification: 'Cloud sync' }
      ],
      optional: [
        { name: 'File System', riskLevel: 'medium', justification: 'File attachments' }
      ]
    },
    adminControls: {
      sso: true,
      mfa: true,
      rbac: true,
      scim: true,
      auditLogs: false,
      dataExport: true
    },
    vulnerabilities: {
      cveCount: 3,
      trendData: Array(12).fill(0).map((_, i) => ({ month: `2025-${String(i + 1).padStart(2, '0')}`, count: i % 4 === 0 ? 1 : 0 })),
      severityBreakdown: {
        critical: 0,
        high: 1,
        medium: 1,
        low: 1
      },
      recentCVEs: [],
      cisaKEV: false
    },
    releaseLifecycle: {
      latestVersion: 'N/A (SaaS)',
      releaseFrequency: 'Continuous',
      patchCadence: 'Immediate',
      eolDates: [],
      ltsVersions: [],
      versionHistory: []
    },
    aiFeatures: {
      hasAI: true,
      features: [
        { 
          name: 'Notion AI', 
          description: 'Writing assistance, content generation, summarization, translation, and Q&A',
          dataAccess: ['page content', 'database entries', 'workspace context', 'linked pages']
        },
        {
          name: 'AI Autofill',
          description: 'Intelligent database field completion and data extraction',
          dataAccess: ['database schemas', 'field values', 'related content']
        },
        {
          name: 'AI Blocks',
          description: 'AI-powered content blocks for various use cases',
          dataAccess: ['block context', 'surrounding content', 'workspace templates']
        }
      ],
      dataUsedForTraining: false,
      canOptOut: true,
      processingLocation: 'cloud'
    },
    incidents: {
      count: 0,
      timeline: []
    },
    compliance: {
      certifications: ['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'HIPAA (Business Associate Agreement available)'],
      dataHandlingSummary: 'Enterprise-grade data protection with encryption at rest and in transit. GDPR-compliant with data residency options for EU customers.',
      dpa: true,
      sources: [
        { id: 'notion1', type: 'compliance-cert', title: 'Notion Security & Compliance', verified: true, date: '2025-07' }
      ]
    },
    sources: {
      public: { count: 28, types: [{ type: 'Vendor Documentation', count: 15 }, { type: 'User Reviews', count: 13 }] },
      confidential: { count: 1, types: [{ type: 'Internal Testing', count: 1 }] }
    },
    alternatives: [
      { name: 'Confluence', vendor: 'Atlassian', trustScore: 82, summary: 'Enterprise wiki and collaboration' }
    ],
    allCitations: []
  },
  {
    id: 'vscode-001',
    timestamp: '2025-11-08T11:00:00Z',
    cached: true,
    product: {
      name: 'Visual Studio Code',
      vendor: 'Microsoft',
      category: 'Developer Tools',
      description: 'Free, open-source code editor with debugging, Git integration, and extensions marketplace.',
      usage: 'Software development, code editing, debugging, version control',
      website: 'https://code.visualstudio.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg'
    },
    trustScore: {
      score: 92,
      rationale: 'Excellent open-source tool with strong security practices, backed by Microsoft with transparent development.',
      confidence: 95
    },
    vendorInfo: {
      companyName: 'Microsoft Corporation',
      headquarters: 'Redmond, WA, USA',
      jurisdiction: 'United States',
      founded: 1975,
      reputation: {
        score: 92,
        summary: 'Global technology leader with strong security practices and significant open-source contributions.',
        sources: []
      },
      securityTrackRecord: 'Excellent. Transparent vulnerability disclosure and rapid patching.',
      psirtPage: 'https://www.microsoft.com/en-us/msrc'
    },
    platformSupport: {
      platforms: [
        { name: 'macOS', supported: true, versions: '10.15+ (Catalina)', securityModel: 'Hardened runtime with notarization' },
        { name: 'Windows', supported: true, versions: '10+ / Windows 11', securityModel: 'Code signed with certificate pinning' },
        { name: 'Linux', supported: true, versions: 'Ubuntu 18.04+, RHEL 7+, Debian 10+', securityModel: 'AppImage/DEB/RPM packages' },
        { name: 'iOS', supported: false },
        { name: 'Android', supported: false },
        { name: 'Web', supported: true, securityModel: 'vscode.dev - browser-based editor' }
      ],
      versionDifferences: 'All desktop platforms have feature parity. Web version (vscode.dev) has limited extension support.'
    },
    dataHandling: {
      storage: {
        location: 'Local + Optional Cloud (Azure)',
        regions: ['Local', 'US', 'EU'],
        cloudProvider: 'Azure (optional)',
        encryptionAtRest: true
      },
      transmission: {
        endpoints: ['vscode.dev', 'marketplace.visualstudio.com'],
        subProcessors: ['Azure'],
        encryptionInTransit: { tls: 'TLS 1.3', certVerified: true }
      },
      usage: {
        analytics: true,
        advertising: false,
        aiTraining: false,
        retentionPolicy: 'Configurable',
        userCanDelete: true
      }
    },
    permissions: {
      required: [
        { name: 'File System', riskLevel: 'high', justification: 'Code editing and project access' }
      ],
      optional: [
        { name: 'Internet Access', riskLevel: 'low', justification: 'Extension marketplace' }
      ]
    },
    adminControls: {
      sso: false,
      mfa: false,
      rbac: false,
      scim: false,
      auditLogs: false,
      dataExport: true
    },
    vulnerabilities: {
      cveCount: 8,
      trendData: Array(12).fill(0).map((_, i) => ({ month: `2025-${String(i + 1).padStart(2, '0')}`, count: i % 3 === 0 ? 1 : 0 })),
      severityBreakdown: {
        critical: 0,
        high: 2,
        medium: 4,
        low: 2
      },
      recentCVEs: [],
      cisaKEV: false
    },
    releaseLifecycle: {
      latestVersion: '1.99.0',
      releaseFrequency: 'Monthly major releases, weekly minor updates',
      patchCadence: 'Immediate for critical security issues, typically within 24-48 hours',
      eolDates: [],
      ltsVersions: [],
      versionHistory: [
        { version: '1.99.0', releaseDate: '2025-11-05', securityFixes: 1 },
        { version: '1.98.2', releaseDate: '2025-10-29', securityFixes: 0 },
        { version: '1.98.0', releaseDate: '2025-10-22', securityFixes: 2 }
      ]
    },
    aiFeatures: {
      hasAI: true,
      features: [
        { 
          name: 'GitHub Copilot Integration', 
          description: 'AI code completion and chat via official extension (requires Copilot subscription)',
          dataAccess: ['code context', 'open files', 'editor state']
        },
        {
          name: 'IntelliCode',
          description: 'AI-powered IntelliSense with context-aware suggestions',
          dataAccess: ['code patterns', 'project structure', 'usage statistics']
        },
        {
          name: 'Code Actions',
          description: 'AI-suggested refactorings and code improvements',
          dataAccess: ['code analysis', 'refactoring patterns', 'best practices']
        }
      ],
      dataUsedForTraining: false,
      canOptOut: true,
      processingLocation: 'cloud'
    },
    incidents: {
      count: 0,
      timeline: []
    },
    compliance: {
      certifications: [],
      dataHandlingSummary: 'Primarily local data storage with optional cloud sync',
      dpa: false,
      sources: []
    },
    sources: {
      public: { count: 85, types: [{ type: 'GitHub Repository', count: 40 }, { type: 'Documentation', count: 45 }] },
      confidential: { count: 0, types: [] }
    },
    alternatives: [
      { name: 'IntelliJ IDEA', vendor: 'JetBrains', trustScore: 90, summary: 'Powerful IDE with strong refactoring' }
    ],
    allCitations: []
  },
  {
    id: 'dropbox-001',
    timestamp: '2025-11-07T16:45:00Z',
    cached: false,
    product: {
      name: 'Dropbox',
      vendor: 'Dropbox Inc.',
      category: 'Cloud Storage',
      description: 'Cloud file storage and synchronization service with sharing and collaboration features.',
      usage: 'File backup, sharing, collaboration, cloud storage',
      website: 'https://dropbox.com',
      logo: 'https://cdn.simpleicons.org/dropbox/0061FF'
    },
    trustScore: {
      score: 81,
      rationale: 'Mature cloud storage with strong security track record and enterprise features, though encryption key management could be improved.',
      confidence: 88
    },
    vendorInfo: {
      companyName: 'Dropbox Inc.',
      headquarters: 'San Francisco, CA, USA',
      jurisdiction: 'United States',
      founded: 2007,
      reputation: {
        score: 84,
        summary: 'Established cloud storage provider with strong reputation and security practices.',
        sources: []
      },
      securityTrackRecord: 'Good. One significant breach in 2012, improved security since then.',
      psirtPage: 'https://www.dropbox.com/security'
    },
    platformSupport: {
      platforms: [
        { name: 'macOS', supported: true, versions: '10.15+ (Catalina)', securityModel: 'Hardened runtime with notarization' },
        { name: 'Windows', supported: true, versions: '10+ / Windows 11', securityModel: 'Code signed with certificate pinning' },
        { name: 'Linux', supported: true, versions: 'Ubuntu 18.04+, Fedora 28+, Debian 10+', securityModel: 'AppImage/DEB/RPM packages' },
        { name: 'iOS', supported: true, versions: '14.0+', securityModel: 'App Sandbox with strict permissions' },
        { name: 'Android', supported: true, versions: '7.0+ (API 24+)', securityModel: 'Android permissions with runtime checks' },
        { name: 'Web', supported: true, securityModel: 'Browser-based with secure file handling' }
      ],
      versionDifferences: 'Desktop apps support selective sync and smart sync. Mobile apps have offline access and camera upload features.'
    },
    dataHandling: {
      storage: {
        location: 'AWS + Custom Infrastructure',
        regions: ['US', 'EU', 'APAC'],
        cloudProvider: 'AWS + Dropbox Infrastructure',
        encryptionAtRest: true
      },
      transmission: {
        endpoints: ['dropbox.com', 'dropboxapi.com'],
        subProcessors: ['AWS'],
        encryptionInTransit: { tls: 'TLS 1.3', certVerified: true }
      },
      usage: {
        analytics: true,
        advertising: false,
        aiTraining: false,
        retentionPolicy: 'Indefinite until deletion',
        userCanDelete: true
      }
    },
    permissions: {
      required: [
        { name: 'File System', riskLevel: 'high', justification: 'File sync and storage' },
        { name: 'Internet Access', riskLevel: 'low', justification: 'Cloud sync' }
      ],
      optional: [
        { name: 'Camera', riskLevel: 'medium', justification: 'Document scanning' }
      ]
    },
    adminControls: {
      sso: true,
      mfa: true,
      rbac: true,
      scim: true,
      auditLogs: true,
      dataExport: true
    },
    vulnerabilities: {
      cveCount: 5,
      trendData: Array(12).fill(0).map((_, i) => ({ month: `2025-${String(i + 1).padStart(2, '0')}`, count: i % 5 === 0 ? 1 : 0 })),
      severityBreakdown: {
        critical: 0,
        high: 1,
        medium: 3,
        low: 1
      },
      recentCVEs: [],
      cisaKEV: false
    },
    releaseLifecycle: {
      latestVersion: '202.4.6251 (Desktop), 202.4.6251 (Mobile)',
      releaseFrequency: 'Bi-weekly updates for desktop, monthly for mobile',
      patchCadence: 'Critical security patches within 24-48 hours, regular updates bi-weekly',
      eolDates: [],
      ltsVersions: [],
      versionHistory: [
        { version: '202.4.6251', releaseDate: '2025-11-06', securityFixes: 1 },
        { version: '202.3.6200', releaseDate: '2025-10-23', securityFixes: 0 },
        { version: '202.3.6150', releaseDate: '2025-10-09', securityFixes: 2 }
      ]
    },
    aiFeatures: {
      hasAI: true,
      features: [
        { 
          name: 'Dropbox Dash', 
          description: 'AI-powered universal search across all connected tools and files',
          dataAccess: ['file metadata', 'content', 'search history', 'connected accounts']
        },
        {
          name: 'Dropbox AI',
          description: 'AI-powered file summarization, Q&A, and content extraction',
          dataAccess: ['file content', 'document text', 'media transcripts']
        },
        {
          name: 'Smart Sync Intelligence',
          description: 'AI-optimized file syncing and storage recommendations',
          dataAccess: ['file access patterns', 'usage statistics', 'storage metrics']
        }
      ],
      dataUsedForTraining: false,
      canOptOut: true,
      processingLocation: 'cloud'
    },
    incidents: {
      count: 1,
      timeline: [
        {
          date: '2016-08-31',
          title: 'Password Breach Disclosure',
          severity: 'High',
          description: 'Over 68 million user credentials from 2012 breach discovered and disclosed',
          impact: 'Passwords from 2012 exposed - breach occurred in 2012 but discovered in 2016',
          resolution: 'Forced password resets, improved security measures',
          sources: []
        }
      ]
    },
    compliance: {
      certifications: ['SOC 2', 'ISO 27001', 'GDPR Compliant', 'HIPAA'],
      dataHandlingSummary: 'Enterprise-grade security with comprehensive compliance',
      dpa: true,
      sources: []
    },
    sources: {
      public: { count: 56, types: [{ type: 'Vendor Documentation', count: 30 }, { type: 'Security Research', count: 26 }] },
      confidential: { count: 2, types: [{ type: 'Internal Testing', count: 2 }] }
    },
    alternatives: [
      { name: 'Google Drive', vendor: 'Google', trustScore: 83, summary: 'Cloud storage with Google Workspace integration' }
    ],
    allCitations: []
  },
  {
    id: 'figma-001',
    timestamp: '2025-11-05T13:20:00Z',
    cached: false,
    product: {
      name: 'Figma',
      vendor: 'Figma Inc.',
      category: 'Design Tools',
      description: 'Collaborative design tool for UI/UX design, prototyping, and design systems.',
      usage: 'Interface design, prototyping, design collaboration, design systems',
      website: 'https://figma.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
    },
    trustScore: {
      score: 76,
      rationale: 'Strong design platform with good security practices, though cloud-only nature raises data control concerns.',
      confidence: 80
    },
    vendorInfo: {
      companyName: 'Figma Inc.',
      headquarters: 'San Francisco, CA, USA',
      jurisdiction: 'United States',
      founded: 2012,
      reputation: {
        score: 80,
        summary: 'Leading independent design platform with strong innovation and user satisfaction. Adobe acquisition attempt was abandoned in December 2023.',
        sources: []
      },
      securityTrackRecord: 'Good. No major security incidents.',
      psirtPage: 'https://www.figma.com/security/'
    },
    platformSupport: {
      platforms: [
        { name: 'macOS', supported: true, versions: '11.0+ (Big Sur)', securityModel: 'Native app with sandboxing' },
        { name: 'Windows', supported: true, versions: '10+ / Windows 11', securityModel: 'Native app with code signing' },
        { name: 'Linux', supported: false },
        { name: 'iOS', supported: true, versions: '15.0+', securityModel: 'App Sandbox (Figma Mirror)' },
        { name: 'Android', supported: true, versions: '8.0+', securityModel: 'Android permissions (Figma Mirror)' },
        { name: 'Web', supported: true, securityModel: 'Browser-based (primary platform with WebAssembly)' }
      ],
      versionDifferences: 'Web platform is primary with full feature set. Desktop apps provide better performance and offline capabilities. Mobile apps (Figma Mirror) are for viewing and commenting only.'
    },
    dataHandling: {
      storage: {
        location: 'AWS (US)',
        regions: ['US'],
        cloudProvider: 'AWS',
        encryptionAtRest: true
      },
      transmission: {
        endpoints: ['figma.com', 'figma-alpha.com'],
        subProcessors: ['AWS', 'Cloudflare'],
        encryptionInTransit: { tls: 'TLS 1.3', certVerified: true }
      },
      usage: {
        analytics: true,
        advertising: false,
        aiTraining: false,
        retentionPolicy: 'Indefinite',
        userCanDelete: true
      }
    },
    permissions: {
      required: [
        { name: 'Internet Access', riskLevel: 'low', justification: 'Cloud-based platform' }
      ],
      optional: [
        { name: 'Clipboard', riskLevel: 'low', justification: 'Copy/paste functionality' }
      ]
    },
    adminControls: {
      sso: true,
      mfa: true,
      rbac: true,
      scim: true,
      auditLogs: true,
      dataExport: true
    },
    vulnerabilities: {
      cveCount: 4,
      trendData: Array(12).fill(0).map((_, i) => ({ month: `2025-${String(i + 1).padStart(2, '0')}`, count: i % 6 === 0 ? 1 : 0 })),
      severityBreakdown: {
        critical: 0,
        high: 1,
        medium: 2,
        low: 1
      },
      recentCVEs: [],
      cisaKEV: false
    },
    releaseLifecycle: {
      latestVersion: 'N/A (SaaS)',
      releaseFrequency: 'Continuous',
      patchCadence: 'Immediate',
      eolDates: [],
      ltsVersions: [],
      versionHistory: []
    },
    aiFeatures: {
      hasAI: true,
      features: [
        {
          name: 'Figma AI',
          description: 'AI-powered design generation, layout suggestions, and content creation',
          dataAccess: ['design files', 'component libraries', 'design patterns', 'workspace context']
        },
        {
          name: 'AI Text Generation',
          description: 'Intelligent text generation and placeholder content',
          dataAccess: ['text layers', 'design context', 'component properties']
        },
        {
          name: 'Smart Layout',
          description: 'AI-assisted layout suggestions and auto-layout optimization',
          dataAccess: ['layout structures', 'component relationships', 'design hierarchy']
        }
      ],
      dataUsedForTraining: false,
      canOptOut: true,
      processingLocation: 'cloud'
    },
    incidents: {
      count: 0,
      timeline: []
    },
    compliance: {
      certifications: ['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'CCPA Compliant'],
      dataHandlingSummary: 'Enterprise-grade data protection with encryption at rest and in transit. GDPR-compliant with data residency options.',
      dpa: true,
      sources: [
        { id: 'figma1', type: 'compliance-cert', title: 'Figma Security & Compliance', verified: true, date: '2025-08' },
        { id: 'figma2', type: 'vendor-stated', title: 'Figma Trust Center', verified: true }
      ]
    },
    sources: {
      public: { count: 38, types: [{ type: 'Vendor Documentation', count: 25 }, { type: 'User Community', count: 13 }] },
      confidential: { count: 1, types: [{ type: 'Internal Testing', count: 1 }] }
    },
    alternatives: [
      { name: 'Adobe XD', vendor: 'Adobe', trustScore: 82, summary: 'Adobe design and prototyping tool' }
    ],
    allCitations: []
  }
];

// ============================================================================
// API Functions
// ============================================================================

export async function getAssessment(id: string): Promise<Assessment | null> {
  await delay(500); // Simulate network delay
  return mockAssessments.find(a => a.id === id) || null;
}

export async function searchAssessments(query: string): Promise<Assessment[]> {
  await delay(300);
  if (!query) return mockAssessments;
  
  const lowercaseQuery = query.toLowerCase();
  return mockAssessments.filter(a => 
    a.product.name.toLowerCase().includes(lowercaseQuery) ||
    a.product.vendor.toLowerCase().includes(lowercaseQuery) ||
    a.product.category.toLowerCase().includes(lowercaseQuery)
  );
}

export async function getDashboardStats(): Promise<DashboardStats> {
  await delay(400);
  
  const totalScore = mockAssessments.reduce((sum, a) => sum + a.trustScore.score, 0);
  
  return {
    totalAssessments: 247,
    averageTrustScore: Math.round(totalScore / mockAssessments.length),
    recentAssessments: mockAssessments.slice(0, 4)
  };
}

export async function getSearchSuggestions(query: string): Promise<string[]> {
  await delay(200);
  
  const suggestions = [
    'Slack',
    'GitHub',
    'Signal',
    'Jira',
    'Microsoft Teams',
    'Zoom',
    'Notion',
    'Asana',
    'Dropbox',
    'Google Workspace'
  ];
  
  if (!query) return suggestions.slice(0, 5);
  
  const lowercaseQuery = query.toLowerCase();
  return suggestions
    .filter(s => s.toLowerCase().includes(lowercaseQuery))
    .slice(0, 5);
}

export async function getAllAssessments(): Promise<Assessment[]> {
  await delay(600);
  return mockAssessments;
}

export async function compareAssessments(ids: string[]): Promise<Assessment[]> {
  await delay(500);
  return mockAssessments.filter(a => ids.includes(a.id));
}
