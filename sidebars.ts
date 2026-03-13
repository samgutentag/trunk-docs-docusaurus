import type {SidebarsConfig} from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  "mergeQueueSidebar": [
    {
      "type": "doc",
      "id": "merge-queue/merge-queue",
      "label": "Overview"
    },
    {
      "type": "category",
      "label": "Getting Started",
      "link": {
        "type": "doc",
        "id": "merge-queue/getting-started/index"
      },
      "items": [
        {
          "type": "doc",
          "id": "merge-queue/getting-started/install-and-create-your-queue",
          "label": "Install and create your queue"
        },
        {
          "type": "doc",
          "id": "merge-queue/getting-started/configure-branch-protection",
          "label": "Configure branch protection"
        },
        {
          "type": "doc",
          "id": "merge-queue/getting-started/configure-ci-status-checks",
          "label": "Configure CI status checks"
        },
        {
          "type": "doc",
          "id": "merge-queue/getting-started/test-your-setup",
          "label": "Test your setup"
        }
      ]
    },
    {
      "type": "doc",
      "id": "merge-queue/migrating-from-github-merge-queue",
      "label": "Migrate from GitHub Merge Queue"
    },
    {
      "type": "category",
      "label": "Optimizations",
      "link": {
        "type": "doc",
        "id": "merge-queue/optimizations/index"
      },
      "items": [
        {
          "type": "doc",
          "id": "merge-queue/optimizations/predictive-testing",
          "label": "Predictive testing"
        },
        {
          "type": "doc",
          "id": "merge-queue/optimizations/anti-flake-protection",
          "label": "Anti-flake protection"
        },
        {
          "type": "category",
          "label": "Parallel queues",
          "link": {
            "type": "doc",
            "id": "merge-queue/optimizations/parallel-queues/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "merge-queue/optimizations/parallel-queues/bazel",
              "label": "Bazel"
            },
            {
              "type": "doc",
              "id": "merge-queue/optimizations/parallel-queues/nx",
              "label": "Nx"
            },
            {
              "type": "doc",
              "id": "merge-queue/optimizations/parallel-queues/api",
              "label": "Custom Build Systems"
            }
          ]
        },
        {
          "type": "doc",
          "id": "merge-queue/optimizations/batching",
          "label": "Batching"
        },
        {
          "type": "doc",
          "id": "merge-queue/optimizations/priority-merging",
          "label": "Priority merging"
        },
        {
          "type": "doc",
          "id": "merge-queue/optimizations/optimistic-merging",
          "label": "Optimistic merging"
        },
        {
          "type": "doc",
          "id": "merge-queue/optimizations/pending-failure-depth",
          "label": "Pending failure depth"
        },
        {
          "type": "doc",
          "id": "merge-queue/optimizations/direct-merge-to-main",
          "label": "Direct merge to main"
        }
      ]
    },
    {
      "type": "category",
      "label": "Using the Queue",
      "link": {
        "type": "doc",
        "id": "merge-queue/using-the-queue/index"
      },
      "items": [
        {
          "type": "doc",
          "id": "merge-queue/using-the-queue/reference",
          "label": "Submit and cancel pull requests"
        },
        {
          "type": "doc",
          "id": "merge-queue/using-the-queue/monitor-queue-status",
          "label": "Monitor queue status"
        },
        {
          "type": "doc",
          "id": "merge-queue/using-the-queue/handle-failed-pull-requests",
          "label": "Handle failed pull requests"
        },
        {
          "type": "doc",
          "id": "merge-queue/using-the-queue/stacked-pull-requests",
          "label": "Work with stacked pull requests"
        },
        {
          "type": "doc",
          "id": "merge-queue/using-the-queue/emergency-pull-requests",
          "label": "Emergency pull requests"
        }
      ]
    },
    {
      "type": "doc",
      "id": "merge-queue/integration-for-slack",
      "label": "Slack Integration"
    },
    {
      "type": "doc",
      "id": "merge-queue/webhooks",
      "label": "Webhooks"
    },
    {
      "type": "category",
      "label": "Administration",
      "link": {
        "type": "doc",
        "id": "merge-queue/administration/index"
      },
      "items": [
        {
          "type": "doc",
          "id": "merge-queue/administration/advanced-settings",
          "label": "Settings and configurations"
        },
        {
          "type": "doc",
          "id": "merge-queue/administration/metrics",
          "label": "Metrics and monitoring"
        }
      ]
    },
    {
      "type": "category",
      "label": "Reference",
      "link": {
        "type": "doc",
        "id": "merge-queue/reference/index"
      },
      "items": [
        {
          "type": "doc",
          "id": "merge-queue/reference/merge-queue-cli-reference",
          "label": "CLI reference"
        },
        {
          "type": "doc",
          "id": "merge-queue/reference/merge",
          "label": "API reference"
        },
        {
          "type": "doc",
          "id": "merge-queue/reference/common-problems",
          "label": "FAQ"
        },
        {
          "type": "doc",
          "id": "merge-queue/reference/troubleshooting",
          "label": "Troubleshooting"
        },
        {
          "type": "doc",
          "id": "merge-queue/reference/how-does-it-work",
          "label": "How does it work?"
        }
      ]
    }
  ],
  "flakyTestsSidebar": [
    {
      "type": "doc",
      "id": "flaky-tests/overview",
      "label": "Overview"
    },
    {
      "type": "category",
      "label": "Getting Started",
      "link": {
        "type": "doc",
        "id": "flaky-tests/get-started/index"
      },
      "items": [
        {
          "type": "category",
          "label": "Test frameworks",
          "link": {
            "type": "doc",
            "id": "flaky-tests/get-started/frameworks/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/android",
              "label": "Android"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/bazel",
              "label": "Bazel"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/behave",
              "label": "Behave"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/rust",
              "label": "cargo-nextest"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/cypress",
              "label": "Cypress"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/dart-test",
              "label": "Dart Test"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/gotestsum",
              "label": "Go"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/googletest",
              "label": "GoogleTest"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/gradle",
              "label": "Gradle"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/jasmine",
              "label": "Jasmine"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/jest",
              "label": "Jest"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/karma",
              "label": "Karma"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/kotest",
              "label": "Kotest"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/maven",
              "label": "Maven"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/minitest",
              "label": "minitest"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/mocha",
              "label": "Mocha"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/nightwatch",
              "label": "Nightwatch"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/nunit",
              "label": "NUnit"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/pest",
              "label": "Pest"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/phpunit",
              "label": "PHPUnit"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/playwright",
              "label": "Playwright"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/pytest",
              "label": "Pytest"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/robot-framework",
              "label": "Robot Framework"
            },
            {
              "type": "category",
              "label": "RSpec",
              "link": {
                "type": "doc",
                "id": "flaky-tests/get-started/frameworks/rspec/index"
              },
              "items": [
                {
                  "type": "doc",
                  "id": "flaky-tests/get-started/frameworks/rspec/manual-uploads",
                  "label": "RSpec (Manual Uploads)"
                }
              ]
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/swift-testing",
              "label": "Swift Testing"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/testplan",
              "label": "Testplan"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/vitest",
              "label": "Vitest"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/xctest",
              "label": "XCTest"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/frameworks/other-test-frameworks",
              "label": "Other Test Frameworks"
            }
          ]
        },
        {
          "type": "category",
          "label": "CI Providers",
          "link": {
            "type": "doc",
            "id": "flaky-tests/get-started/ci-providers/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "flaky-tests/get-started/ci-providers/azure-devops-pipelines",
              "label": "Azure DevOps Pipelines"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/ci-providers/bitbucket-pipelines",
              "label": "BitBucket Pipelines"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/ci-providers/buildkite",
              "label": "Buildkite"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/ci-providers/circleci",
              "label": "CircleCI"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/ci-providers/droneci",
              "label": "Drone CI"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/ci-providers/github-actions",
              "label": "GitHub Actions"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/ci-providers/gitlab",
              "label": "GitLab"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/ci-providers/jenkins",
              "label": "Jenkins"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/ci-providers/semaphoreci",
              "label": "Semaphore CI"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/ci-providers/travisci",
              "label": "Travis CI"
            },
            {
              "type": "doc",
              "id": "flaky-tests/get-started/ci-providers/otherci",
              "label": "Other CI Providers"
            }
          ]
        }
      ]
    },
    {
      "type": "doc",
      "id": "flaky-tests/managing-detected-flaky-tests",
      "label": "Managing detected flaky tests"
    },
    {
      "type": "doc",
      "id": "flaky-tests/dashboard",
      "label": "Dashboard"
    },
    {
      "type": "doc",
      "id": "flaky-tests/detection",
      "label": "Flaky test detection"
    },
    {
      "type": "doc",
      "id": "flaky-tests/infrastructure-failure-protection",
      "label": "Infrastructure Failure Protection"
    },
    {
      "type": "doc",
      "id": "flaky-tests/the-importance-of-pr-test-results",
      "label": "The Importance of PR Test Results"
    },
    {
      "type": "doc",
      "id": "flaky-tests/quarantining",
      "label": "Quarantining"
    },
    {
      "type": "doc",
      "id": "flaky-tests/quarantine-service-availability",
      "label": "Quarantine Service Availability"
    },
    {
      "type": "doc",
      "id": "flaky-tests/github-pull-request-comments",
      "label": "Pull request comments"
    },
    {
      "type": "category",
      "label": "Ticketing integrations",
      "link": {
        "type": "doc",
        "id": "flaky-tests/ticketing-integrations/index"
      },
      "items": [
        {
          "type": "doc",
          "id": "flaky-tests/ticketing-integrations/jira-integration",
          "label": "Jira integration"
        },
        {
          "type": "doc",
          "id": "flaky-tests/ticketing-integrations/linear-integration",
          "label": "Linear integration"
        },
        {
          "type": "doc",
          "id": "flaky-tests/ticketing-integrations/other-ticketing-platforms",
          "label": "Other ticketing platforms"
        }
      ]
    },
    {
      "type": "category",
      "label": "Webhooks",
      "link": {
        "type": "doc",
        "id": "flaky-tests/webhooks/index"
      },
      "items": [
        {
          "type": "doc",
          "id": "flaky-tests/webhooks/slack-integration",
          "label": "Slack integration"
        },
        {
          "type": "doc",
          "id": "flaky-tests/webhooks/microsoft-teams-integration",
          "label": "Microsoft Teams integration"
        },
        {
          "type": "doc",
          "id": "flaky-tests/webhooks/github-issues-integration",
          "label": "GitHub Issues integration"
        },
        {
          "type": "doc",
          "id": "flaky-tests/webhooks/linear-integration",
          "label": "Linear integration"
        }
      ]
    },
    {
      "type": "doc",
      "id": "flaky-tests/flaky-tests",
      "label": "Flaky Tests API"
    },
    {
      "type": "doc",
      "id": "flaky-tests/uploader",
      "label": "Trunk Analytics CLI"
    }
  ],
  "ciAutopilotSidebar": [
    {
      "type": "category",
      "label": "Overview",
      "link": {
        "type": "doc",
        "id": "ci-autopilot/overview/index"
      },
      "items": [
        {
          "type": "category",
          "label": "Get Started",
          "link": {
            "type": "doc",
            "id": "ci-autopilot/overview/get-started/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "ci-autopilot/overview/get-started/connect-to-github",
              "label": "Connect to GitHub"
            },
            {
              "type": "doc",
              "id": "ci-autopilot/overview/get-started/upload-test-reports",
              "label": "Upload test reports"
            }
          ]
        },
        {
          "type": "category",
          "label": "Use CI Autopilot",
          "link": {
            "type": "doc",
            "id": "ci-autopilot/overview/use-ci-autopilot/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "ci-autopilot/overview/use-ci-autopilot/understand-root-cause-analysis",
              "label": "Understand root cause analysis"
            },
            {
              "type": "doc",
              "id": "ci-autopilot/overview/use-ci-autopilot/request-fixes-on-prs",
              "label": "Request fixes on PRs"
            },
            {
              "type": "doc",
              "id": "ci-autopilot/overview/use-ci-autopilot/apply-fixes-with-mcp",
              "label": "Apply fixes with MCP"
            }
          ]
        },
        {
          "type": "category",
          "label": "Use MCP Server",
          "link": {
            "type": "doc",
            "id": "ci-autopilot/overview/use-mcp-server/index"
          },
          "items": [
            {
              "type": "category",
              "label": "Configuration",
              "link": {
                "type": "doc",
                "id": "ci-autopilot/overview/use-mcp-server/configuration/index"
              },
              "items": [
                {
                  "type": "doc",
                  "id": "ci-autopilot/overview/use-mcp-server/configuration/cursor-ide",
                  "label": "Cursor (IDE)"
                },
                {
                  "type": "doc",
                  "id": "ci-autopilot/overview/use-mcp-server/configuration/github-copilot-ide",
                  "label": "GitHub Copilot (IDE)"
                },
                {
                  "type": "doc",
                  "id": "ci-autopilot/overview/use-mcp-server/configuration/claude-code-cli",
                  "label": "Claude Code (CLI)"
                },
                {
                  "type": "doc",
                  "id": "ci-autopilot/overview/use-mcp-server/configuration/gemini-cli",
                  "label": "Gemini (CLI)"
                }
              ]
            },
            {
              "type": "category",
              "label": "MCP Tool Reference",
              "link": {
                "type": "doc",
                "id": "ci-autopilot/overview/use-mcp-server/mcp-tool-reference/index"
              },
              "items": [
                {
                  "type": "doc",
                  "id": "ci-autopilot/overview/use-mcp-server/mcp-tool-reference/get-root-cause-analysis",
                  "label": "Get root cause analysis"
                },
                {
                  "type": "doc",
                  "id": "ci-autopilot/overview/use-mcp-server/mcp-tool-reference/set-up-test-uploads",
                  "label": "Set up test uploads"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "Use Dashboard",
          "link": {
            "type": "doc",
            "id": "ci-autopilot/overview/use-dashboard/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "ci-autopilot/overview/use-dashboard/review-activity",
              "label": "Review activity"
            },
            {
              "type": "doc",
              "id": "ci-autopilot/overview/use-dashboard/test-uploads",
              "label": "Test Uploads"
            },
            {
              "type": "doc",
              "id": "ci-autopilot/overview/use-dashboard/change-settings",
              "label": "Change settings"
            }
          ]
        }
      ]
    },
    {
      "type": "doc",
      "id": "ci-autopilot/faqs",
      "label": "FAQs"
    }
  ],
  "codeQualitySidebar": [
    {
      "type": "category",
      "label": "Overview",
      "link": {
        "type": "doc",
        "id": "code-quality/overview/index"
      },
      "items": [
        {
          "type": "doc",
          "id": "code-quality/overview/initialize-trunk",
          "label": "Initialize Trunk"
        },
        {
          "type": "doc",
          "id": "code-quality/overview/deal-with-existing-issues",
          "label": "Local linting"
        },
        {
          "type": "category",
          "label": "Linting in CI",
          "link": {
            "type": "doc",
            "id": "code-quality/overview/prevent-new-issues/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "code-quality/overview/prevent-new-issues/migration-guide",
              "label": "Migration Guide"
            }
          ]
        },
        {
          "type": "category",
          "label": "IDE integrations",
          "link": {
            "type": "doc",
            "id": "code-quality/overview/ide-integration/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "code-quality/overview/ide-integration/vscode",
              "label": "VSCode"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/ide-integration/openai-codex-support",
              "label": "OpenAI Codex Support"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/ide-integration/neovim",
              "label": "Neovim"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/ide-integration/github-codespaces",
              "label": "GitHub Codespaces"
            }
          ]
        },
        {
          "type": "category",
          "label": "Code Quality CLI",
          "link": {
            "type": "doc",
            "id": "code-quality/overview/cli/getting-started/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "code-quality/overview/cli/getting-started/code-quality",
              "label": "Code Quality"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/cli/getting-started/install",
              "label": "Install"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/cli/getting-started/tools",
              "label": "Tools"
            },
            {
              "type": "category",
              "label": "Actions",
              "link": {
                "type": "doc",
                "id": "code-quality/overview/cli/getting-started/actions/index"
              },
              "items": [
                {
                  "type": "doc",
                  "id": "code-quality/overview/cli/getting-started/actions/git-hooks",
                  "label": "Git Hooks"
                }
              ]
            },
            {
              "type": "doc",
              "id": "code-quality/overview/cli/getting-started/announce",
              "label": "Announce"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/cli/getting-started/compatibility",
              "label": "Compatibility"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/cli/getting-started/caching",
              "label": "Caching"
            },
            {
              "type": "category",
              "label": "Commands reference",
              "link": {
                "type": "doc",
                "id": "code-quality/overview/cli/getting-started/commands-reference/index"
              },
              "items": [
                {
                  "type": "doc",
                  "id": "code-quality/overview/cli/getting-started/commands-reference/code-quality",
                  "label": "Code Quality"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/cli/getting-started/commands-reference/actions",
                  "label": "Actions"
                }
              ]
            },
            {
              "type": "category",
              "label": "Configuration",
              "link": {
                "type": "doc",
                "id": "code-quality/overview/cli/getting-started/configuration/index"
              },
              "items": [
                {
                  "type": "category",
                  "label": "Plugins",
                  "link": {
                    "type": "doc",
                    "id": "code-quality/overview/cli/getting-started/configuration/plugins/index"
                  },
                  "items": [
                    {
                      "type": "doc",
                      "id": "code-quality/overview/cli/getting-started/configuration/plugins/external-repositories",
                      "label": "Share config between codebases"
                    },
                    {
                      "type": "doc",
                      "id": "code-quality/overview/cli/getting-started/configuration/plugins/exported-configs",
                      "label": "Exporting linter configs"
                    }
                  ]
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/cli/getting-started/configuration/runtimes",
                  "label": "Runtimes"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/cli/getting-started/configuration/tools",
                  "label": "Tools"
                },
                {
                  "type": "category",
                  "label": "Lint",
                  "link": {
                    "type": "doc",
                    "id": "code-quality/overview/cli/getting-started/configuration/lint/index"
                  },
                  "items": [
                    {
                      "type": "doc",
                      "id": "code-quality/overview/cli/getting-started/configuration/lint/definitions",
                      "label": "Definitions"
                    },
                    {
                      "type": "doc",
                      "id": "code-quality/overview/cli/getting-started/configuration/lint/commands",
                      "label": "Commands"
                    },
                    {
                      "type": "doc",
                      "id": "code-quality/overview/cli/getting-started/configuration/lint/output",
                      "label": "Output"
                    },
                    {
                      "type": "doc",
                      "id": "code-quality/overview/cli/getting-started/configuration/lint/output-parsing",
                      "label": "Output Parsing"
                    },
                    {
                      "type": "doc",
                      "id": "code-quality/overview/cli/getting-started/configuration/lint/files-and-caching",
                      "label": "Files and Caching"
                    },
                    {
                      "type": "doc",
                      "id": "code-quality/overview/cli/getting-started/configuration/lint/dependencies",
                      "label": "Dependencies"
                    },
                    {
                      "type": "doc",
                      "id": "code-quality/overview/cli/getting-started/configuration/lint/auto-enable",
                      "label": "Auto-Enable"
                    }
                  ]
                },
                {
                  "type": "category",
                  "label": "Actions",
                  "link": {
                    "type": "doc",
                    "id": "code-quality/overview/cli/getting-started/configuration/actions/index"
                  },
                  "items": [
                    {
                      "type": "doc",
                      "id": "code-quality/overview/cli/getting-started/configuration/actions/notifications",
                      "label": "Notifications"
                    },
                    {
                      "type": "doc",
                      "id": "code-quality/overview/cli/getting-started/configuration/actions/logging-and-troubleshooting",
                      "label": "Logging and Troubleshooting"
                    }
                  ]
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/cli/getting-started/configuration/merge",
                  "label": "Merge"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/cli/getting-started/configuration/telemetry",
                  "label": "Telemetry"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/cli/getting-started/configuration/per-user-overrides",
                  "label": "Per User Overrides"
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "Setup and installation",
          "link": {
            "type": "doc",
            "id": "code-quality/overview/setup-and-installation/index"
          },
          "items": [
            {
              "type": "doc",
              "id": "code-quality/overview/setup-and-installation/github-integration",
              "label": "Nightly report (Deprecated)"
            }
          ]
        },
        {
          "type": "category",
          "label": "Linters",
          "link": {
            "type": "doc",
            "id": "code-quality/overview/linters/index"
          },
          "items": [
            {
              "type": "category",
              "label": "Supported linters",
              "link": {
                "type": "doc",
                "id": "code-quality/overview/linters/supported/index"
              },
              "items": [
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/actionlint",
                  "label": "Actionlint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/ansible-lint",
                  "label": "Ansible-lint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/autopep8",
                  "label": "Autopep8"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/bandit",
                  "label": "Bandit"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/biome",
                  "label": "Biome"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/black",
                  "label": "Black"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/brakeman",
                  "label": "Brakeman"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/buf",
                  "label": "buf"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/buildifier",
                  "label": "Buildifier"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/cfnlint",
                  "label": "cfnlint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/checkov",
                  "label": "Checkov"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/circleci",
                  "label": "circleci"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/clang-format",
                  "label": "ClangFormat"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/clang-tidy",
                  "label": "clang-tidy"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/clippy",
                  "label": "Clippy"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/cmake-format",
                  "label": "cmake-format"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/codespell",
                  "label": "codespell"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/cspell",
                  "label": "cspell"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/cue-fmt",
                  "label": "cue-fmt"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/dart",
                  "label": "dart"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/deno",
                  "label": "deno"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/detekt",
                  "label": "Detekt"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/djlint",
                  "label": "djlint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/dotenv-linter",
                  "label": "dotenv-linter"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/dotnet-format",
                  "label": "dotnet-format"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/dustilock",
                  "label": "dustilock"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/eslint",
                  "label": "ESLint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/flake8",
                  "label": "Flake8"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/git-diff-check",
                  "label": "git-diff-check"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/gitleaks",
                  "label": "Gitleaks"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/gofmt",
                  "label": "Gofmt"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/gofumpt",
                  "label": "gofumpt"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/goimports",
                  "label": "goimports"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/gokart",
                  "label": "gokart"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/golangci-lint",
                  "label": "golangci-lint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/golines",
                  "label": "golines"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/google-java-format",
                  "label": "google-java-format"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/graphql-schema-linter",
                  "label": "graphql-schema-linter"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/hadolint",
                  "label": "hadolint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/haml-lint",
                  "label": "haml-lint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/isort",
                  "label": "isort"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/iwyu",
                  "label": "iwyu"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/ktlint",
                  "label": "ktlint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/kube-linter",
                  "label": "kube-linter"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/markdown-link-check",
                  "label": "markdown-link-check"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/markdown-table-prettify",
                  "label": "markdown-table-prettify"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/markdownlint",
                  "label": "Markdownlint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/markdownlint-cli2",
                  "label": "markdownlint-cli2"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/mypy",
                  "label": "mypy"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/nancy",
                  "label": "nancy"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/nixpkgs-fmt",
                  "label": "nixpkgs-fmt"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/opa",
                  "label": "opa"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/osv-scanner",
                  "label": "OSV-Scanner"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/oxipng",
                  "label": "Oxipng"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/perlcritic",
                  "label": "perlcritic"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/perltidy",
                  "label": "perltidy"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/php-cs-fixer",
                  "label": "php-cs-fixer"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/phpstan",
                  "label": "phpstan"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/pmd",
                  "label": "pmd"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/pragma-once",
                  "label": "pragma-once"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/pre-commit-hooks",
                  "label": "pre-commit-hooks"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/prettier",
                  "label": "Prettier"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/prisma",
                  "label": "prisma"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/psscriptanalyzer",
                  "label": "psscriptanalyzer"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/pylint",
                  "label": "Pylint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/pyright",
                  "label": "pyright"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/regal",
                  "label": "regal"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/remark-lint",
                  "label": "remark-lint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/renovate",
                  "label": "renovate"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/rome",
                  "label": "rome"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/rubocop",
                  "label": "rubocop"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/ruff",
                  "label": "Ruff"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/rufo",
                  "label": "rufo"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/rustfmt",
                  "label": "rustfmt"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/scalafmt",
                  "label": "scalafmt"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/semgrep",
                  "label": "semgrep"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/shellcheck",
                  "label": "ShellCheck"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/shfmt",
                  "label": "shfmt"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/sort-package-json",
                  "label": "sort-package-json"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/sourcery",
                  "label": "sourcery"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/sql-formatter",
                  "label": "sql-formatter"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/sqlfluff",
                  "label": "SQLFluff"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/sqlfmt",
                  "label": "sqlfmt"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/squawk",
                  "label": "squawk"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/standardrb",
                  "label": "standardrb"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/stringslint",
                  "label": "stringslint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/stylelint",
                  "label": "stylelint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/stylua",
                  "label": "stylua"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/svgo",
                  "label": "SVGO"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/swiftformat",
                  "label": "swiftformat"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/swiftlint",
                  "label": "swiftlint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/taplo",
                  "label": "taplo"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/terraform",
                  "label": "Terraform"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/terragrunt",
                  "label": "terragrunt"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/terrascan",
                  "label": "terrascan"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/tflint",
                  "label": "TFLint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/tfsec",
                  "label": "tfsec"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/tofu",
                  "label": "tofu"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/trivy",
                  "label": "Trivy"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/trufflehog",
                  "label": "Trufflehog"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/txtpbfmt",
                  "label": "txtpbfmt"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/vale",
                  "label": "vale"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/yamllint",
                  "label": "Yamllint"
                },
                {
                  "type": "doc",
                  "id": "code-quality/overview/linters/supported/yapf",
                  "label": "yapf"
                }
              ]
            },
            {
              "type": "doc",
              "id": "code-quality/overview/linters/run-linters",
              "label": "Run linters"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/linters/manage-linters",
              "label": "Manage linters"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/linters/configure-linters",
              "label": "Configure linters"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/linters/ignoring-issues-and-files",
              "label": "Ignoring issues and files"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/linters/custom-linters",
              "label": "Custom linters"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/linters/shared-configs",
              "label": "Shared configs"
            },
            {
              "type": "doc",
              "id": "code-quality/overview/linters/upgrades",
              "label": "Upgrades"
            }
          ]
        },
        {
          "type": "doc",
          "id": "code-quality/overview/debugging",
          "label": "Debugging"
        },
        {
          "type": "doc",
          "id": "code-quality/overview/licensing",
          "label": "Licensing"
        }
      ]
    }
  ],
  "setupAdminSidebar": [
    {
      "type": "doc",
      "id": "setup-and-administration/connecting-to-trunk",
      "label": "Account Setup"
    },
    {
      "type": "doc",
      "id": "setup-and-administration/managing-your-organization",
      "label": "Managing your Organization"
    },
    {
      "type": "doc",
      "id": "setup-and-administration/github-app-permissions",
      "label": "Trunk GitHub App"
    },
    {
      "type": "doc",
      "id": "setup-and-administration/support",
      "label": "Support"
    },
    {
      "type": "doc",
      "id": "setup-and-administration/billing",
      "label": "Billing and plans"
    },
    {
      "type": "doc",
      "id": "setup-and-administration/security",
      "label": "Security"
    },
    {
      "type": "category",
      "label": "API Reference",
      "link": {
        "type": "doc",
        "id": "setup-and-administration/apis/index"
      },
      "items": [
        {
          "type": "doc",
          "id": "flaky-tests/flaky-tests",
          "label": "Flaky Tests"
        },
        {
          "type": "doc",
          "id": "merge-queue/reference/merge",
          "label": "Merge Queue"
        },
        {
          "type": "doc",
          "id": "setup-and-administration/apis/webhooks",
          "label": "Webhooks Reference"
        }
      ]
    }
  ]
};

export default sidebars;
