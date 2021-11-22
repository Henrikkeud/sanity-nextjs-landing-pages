export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619bd4bb2de6864bd309a799',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gbf5vtjc',
                  apiId: '2984d66d-3b19-475d-af3e-5d88e0097eaa'
                },
                {
                  buildHookId: '619bd4bba20c2c4b78418cf1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-g3yogtdd',
                  apiId: '1e540e14-744a-4e89-ad22-e35bb8447d7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Henrikkeud/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-g3yogtdd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
