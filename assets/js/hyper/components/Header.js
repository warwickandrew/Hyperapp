import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
  <header>
  <div class="container">
    <div class="logo">
      Logo
    </div>
    <nav>
    <a href="#">Our Story</a>
    <a href="#">Reviews</a>
    <a href="#">Special Offers</a>
    <a href="#">Book Appointment</a>
    <a href="#">Contact Us</a>
    </nav>
  </div>
  </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
