export default {
  widgets: [
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
                  buildHookId: '5eb6a1021842f508ad0a5d15',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ouofohuj',
                  apiId: 'eb2c0aa6-19bc-4df0-ba34-f2e4745cac7c'
                },
                {
                  buildHookId: '5eb6a1031842f5d3530a5ed8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jidfmpot',
                  apiId: 'be5beb9d-699c-44e1-8292-143df0f51b19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/friebe/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jidfmpot.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
