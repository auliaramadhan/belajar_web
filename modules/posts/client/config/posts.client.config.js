(function () {
  'use strict';

  angular
    .module('posts')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    // menuService.addMenuItem('topbar', {
    //   title: 'Posts',
    //   state: 'posts',
    //   type: 'dropdown',
    //   roles: ['*']
    // });

    // // Add the dropdown list item
    // menuService.addSubMenuItem('topbar', 'posts', {
    //   title: 'List Posts',
    //   state: 'posts.list'
    // });

    // // Add the dropdown create item
    // menuService.addSubMenuItem('topbar', 'posts', {
    //   title: 'Create Post',
    //   state: 'posts.create',
    //   roles: ['user']
    // });

    // Add the dropdown list item
    menuService.addMenuItem('topbar', {
      title: 'Latest Posts',
      state: 'posts.list',
      roles: ['*']
    });

    // Add the dropdown create item
    menuService.addMenuItem('topbar', {
      title: 'Create Post',
      state: 'posts.create',
      roles: ['user']
    });

  }
}());
