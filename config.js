// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'with Nocturlab',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'fr', // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Cloud',
      icon: 'upload-cloud',
      link: 'https://cloud.nocturlab.fr',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'mailto:contact@nocturlab.fr',
    },
    {
      id: '3',
      name: 'PeerTube',
      icon: 'airplay',
      link: 'http://tube.nocturlab.fr/video-channels/nocturlab',
    },
    {
      id: '4',
      name: 'Matrix',
      icon: 'message-circle',
      link: 'https://talk.nocturlab.fr/#/room/#nocturlab:nocturlab.fr',
    },
    {
      id: '5',
      name: 'Social',
      icon: 'activity',
      link: 'https://cloud.nocturlab.fr/apps/social/@shiishii',
    },
    {
      id: '6',
      name: 'Telegram',
      icon: 'send',
      link: 'https://t.me/nocturlab',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Inspirational',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Classic',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Oldies',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
      {
        name: 'Rock',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
    ],
    secondList: [
      {
        name: 'Matrix',
        link: 'https://talk.nocturlab.fr/#/room/#nocturlab:matrix.nocturlab.fr',
      },
      {
        name: 'Mastodon',
        link: 'https://cloud.nocturlab.fr/apps/social/@shiishii/',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/nocturlab',
      },
      {
        name: 'Twitch',
        link: 'https://twitch.com/nocturlab',
      },
    ],
  },
};
