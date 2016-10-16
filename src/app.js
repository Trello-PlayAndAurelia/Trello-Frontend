import { Board } from './board';

export class App {
  heading = "Trello";
  configureRouter(config, router) {
    config.title = 'Trello';
    config.map([
      { route: ['', 'home'], name: 'boardList', moduleId: 'boardList', nav: true, title: 'Boards' },
      { route: ['board/:boardId'], name: 'board', moduleId: 'board',  title: 'Board', href: 'board/0',},
      { route: ['login'], name: 'login', moduleId: 'login', title: 'Login' },
      { route: ['signup'], name: 'signup', moduleId: 'signup', title: 'Signup' }
    ]);

    this.router = router;
  }
}