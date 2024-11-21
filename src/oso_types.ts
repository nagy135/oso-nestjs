// Manually editing this file is discouraged. It was generated with:
// $ oso-cloud generate-types typescript ./src/auth/oso_policy.polar
export type PolarTypes = {
  fact:
    | [
        'has_relation',
        { type: 'Project'; id: string },
        { type: 'String'; id: 'project_container' },
        { type: 'Organization'; id: string },
      ]
    | [
        'has_role',
        { type: 'User'; id: string },
        { type: 'String'; id: 'owner' } | { type: 'String'; id: 'viewer' },
        { type: 'Organization'; id: string },
      ]
    | [
        'has_role',
        { type: 'User'; id: string },
        { type: 'String'; id: 'owner' } | { type: 'String'; id: 'viewer' },
        { type: 'Project'; id: string },
      ];
  query:
    | [
        'allow',
        { type: 'User'; id: string },
        { type: 'String'; id: 'edit' } | { type: 'String'; id: 'view' },
        { type: 'Project'; id: string },
      ]
    | [
        'has_permission',
        { type: 'User'; id: string },
        { type: 'String'; id: 'edit' } | { type: 'String'; id: 'view' },
        { type: 'Project'; id: string },
      ]
    | [
        'has_role',
        { type: 'User'; id: string },
        { type: 'String'; id: 'owner' } | { type: 'String'; id: 'viewer' },
        { type: 'Project'; id: string },
      ];
};
