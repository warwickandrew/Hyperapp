import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
  <footer>
  <div class="container">
    <h1>LOGO</h1>

    <nav class="menu">
      <a href="#">Our Story</a>
      <a href="#">Reviews</a>
      <a href="#">Special Offers</a>
      <a href="#">Book Appointment</a>
      <a href="#">Contact Us</a>
    </nav>

    <ul class="social-media">
      <li><a href="#" target="new"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
      <li><a href="#" target="new"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li><a href="#" target="new"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
      <li><a href="#" target="new"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
    </ul>

    <div class="copyright">
      © 2018 Copyright
    </div>
  </div>
</footer>
  )
}
