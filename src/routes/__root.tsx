import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

import appCss from '../styles.css?url'

const TanStackDevtools = import.meta.env.DEV
  ? lazy(() =>
      import('@tanstack/react-devtools').then((res) => ({
        default: res.TanStackDevtools,
      }))
    )
  : () => null

const TanStackRouterDevtoolsPanel = import.meta.env.DEV
  ? lazy(() =>
      import('@tanstack/react-router-devtools').then((res) => ({
        default: res.TanStackRouterDevtoolsPanel,
      }))
    )
  : () => null

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Zhaka Hidayat Yasir - Fullstack Developer',
      },
      {
        name: 'description',
        content:
          'Personal portfolio of Zhaka Hidayat Yasir, a passionate Fullstack Developer with 2+ years of experience building web applications and dashboards.',
      },
      {
        name: 'keywords',
        content:
          'Zhaka Hidayat Yasir, Fullstack Developer, React, Next.js, Python, Golang, Web Development, Portfolio',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        {import.meta.env.DEV && (
          <Suspense fallback={null}>
            <TanStackDevtools
              config={{
                position: 'bottom-right',
              }}
              plugins={[
                {
                  name: 'Tanstack Router',
                  render: <TanStackRouterDevtoolsPanel />,
                },
              ]}
            />
          </Suspense>
        )}
        <Scripts />
      </body>
    </html>
  )
}
