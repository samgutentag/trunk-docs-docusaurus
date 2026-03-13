import type {SidebarsConfig} from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  "docsSidebar": [
    {
      "type": "category",
      "label": "Merge Queue",
      "link": {
        "type": "doc",
        "id": "merge-queue/merge-queue"
      },
      "items": [
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
      ]
    },
    {
      "type": "category",
      "label": "Flaky Tests",
      "link": {
        "type": "doc",
        "id": "flaky-tests/overview"
      },
      "items": [
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
      ]
    },
    {
      "type": "category",
      "label": "Setup & Administration",
      "link": {
        "type": "doc",
        "id": "setup-and-administration/connecting-to-trunk"
      },
      "items": [
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
    }
  ]
};

export default sidebars;
