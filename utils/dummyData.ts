export const getDummyContacts = () => {
    return [
      {
        id: '1',
        name: 'Laurie Dupont',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        online: false,
        coordinate: {
          latitude: -18.8792 + 0.002,
          longitude: 47.5079 - 0.003,
        },
      },
      {
        id: '2',
        name: 'Mathieu Bernard',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
        online: true,
        coordinate: {
          latitude: -18.8792 - 0.003,
          longitude: 47.5079 + 0.002,
        },
      },
      {
        id: '3',
        name: 'Sophie Martin',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
        online: true,
        coordinate: {
          latitude: -18.8792 + 0.001,
          longitude: 47.5079 + 0.004,
        },
      },
    ];
  };
  
  export const getDummyPlaces = () => {
    return [
      {
        id: '1',
        name: 'Anjara Hôtel',
        address: 'Rue Docteur Rasanjy, Antananarivo',
        type: 'hotel',
        rating: '4.5',
        distance: '1.2',
        coordinate: {
          latitude: -18.8792 + 0.005,
          longitude: 47.5079 + 0.005,
        },
      },
      {
        id: '2',
        name: 'Valiha Hotel',
        address: 'Antananarivo',
        type: 'hotel',
        rating: '4.2',
        distance: '0.8',
        coordinate: {
          latitude: -18.8792 - 0.005,
          longitude: 47.5079 - 0.004,
        },
      },
      {
        id: '3',
        name: 'Toyota by CFAO',
        address: 'Ankorondrano, Antananarivo',
        type: 'shop',
        lastVisit: 'Il y a 3 jours',
        distance: '0.5',
        coordinate: {
          latitude: -18.8792 - 0.001,
          longitude: 47.5079 - 0.002,
        },
      },
      {
        id: '4',
        name: 'Tana Water Front',
        address: 'Waterfront, Antananarivo',
        type: 'restaurant',
        rating: '4.8',
        distance: '0.9',
        coordinate: {
          latitude: -18.8792 + 0.001,
          longitude: 47.5079 + 0.008,
        },
      },
    ];
  };
  
  export const getDummyChats = () => {
    const contacts = getDummyContacts();
    
    return [
      {
        id: '1',
        contact: contacts[0],
        lastMessage: "Je suis en route, j'arrive dans 10 minutes",
        lastMessageTime: '18:32',
        unread: true,
        unreadCount: 3,
      },
      {
        id: '2',
        contact: contacts[1],
        lastMessage: "On se retrouve au restaurant à 20h ?",
        lastMessageTime: '17:15',
        unread: false,
      },
      {
        id: '3',
        contact: contacts[2],
        lastMessage: "N'oublie pas d'apporter les documents pour la réunion",
        lastMessageTime: 'Hier',
        unread: false,
      },
    ];
  };