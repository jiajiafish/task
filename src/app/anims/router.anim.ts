import { trigger, state, transition, style, animate, group } from "@angular/animations";
export const slideToRight = trigger("routeAnim", [
  state('void', style({ position: 'fixed', 'width': '100%', 'height': '80%' })),
  state('*', style({ position: 'fixed', 'width': '100%', 'height': '80%' })),
  // void=>*别名：enter
  // *=>void别名：leave
  transition(":enter", [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    group([
      animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })),
      animate('0.3s ease-in', style({ opacity: 1 }))

    ])
  ]),
  transition(":leave", [
    style({ transform: 'translateX(0)' }),
    group([
      animate('0.5s ease-in-out',style({transform:'translateX(100%)'})),
      animate('0.3s ease-in',style({opacity:0}))
    ])
  ]),
])
