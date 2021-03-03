/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  uciSidebar: {
    'UCI Overview': ['UCIGlossary',
    {
      Core: ['UCIFeatures', 'UCIConcepts', 'UCIArchitecture']
    }
  ],
    'UCI API': ['APIAdapter', 'APITransformer', 'APIBot', 'APIUserSegment', 'APIConversationLogic' ],
    'UCI Schema': ['SchemaAdapter','SchemaTransformer','SchemaBot','SchemaUserSegment','SchemaConversationLogic',]
  },
  someSidebar: {
    Products: [
      {
        Samiksha: ['SamikshaFuncSpecs', 'deploysamiksha'],
      },
      {
        Samwad: ['SamwadFuncSpecs', 'deploysamwad'],
      },
      {
        Pariksha: ['ParikshaFuncSpecs', 'deploypariksha'],
      },
    ],      
    Components: [
      'ComponentsOverview',
      {
        'Mobile Application': [
          'COMobileApplication',
          'GettingStartedMobileComponent',
          'FormManagementModule',
          'AncillaryScreensModule',
          'AndroidProfileManagementModule',
          'CascadingSearchModule',
          'NotificationModule',
          'OfflineHandlingModule',
          'Grove',
          {
            Guides: ['CommunicatingAmongModules'],
          },
        ],
      },
      {
        'Application Control': [
          'COAppControl',
          'AppControlPanel',
          'UserManagement',
          'UserAuthentication',
          'UserAuthorisation',
          'AppDataManagement',
          'AppConfig',
          {
            Guides: [
              'AdminSidebarConfig',
              'AdminAddingMultipleLanguages',
              'AdminAddingCustomRoutes',
            ],
          },
        ],
      },
      {
        'Database Management': [
          'CODatabaseManagement',
          {
            PostgreSQL: [
              'PSQLOverview',
              'dSmall',
              'dMedium',
              'pSmall',
              'pMedium',
              'pLarge',
              {Guides: ['PSQLReplication']},
            ],
          },
          // {
          //   Redis: ['RedisOverview', {Guides: []}],
          // },
        ],
      },
      {'Data Analytics': ['CODataAnalytics', 'DataVisualization']},
      {
        'PDF Generator': [
          'COPDFGenerator',
          'GoogleDoc2PDF',
          'FormResponses2PDF',
          'HTML2PDF',
          {
            Guides: ['PDFBuildAPlugin', 'PDFModuleArchitecture'],
          },
        ],
      },
      {
        'Conversations & Alerts': [
          'COConversations',
          'CommunicationAdapter',
          'CommunicationTransformer',
          'CommunicationOrchestrator',
          {
            Guides: ['XMessageSpec'],
          },
        ],
      },
    ],
  },
};
