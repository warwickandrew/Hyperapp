import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (
  <section id="ContactUs" class="texturebg">
  <div class="container">
    <h5 class="comp-title">Contact Us</h5>
    <h2>Make A Booking</h2>

    <div class="box">

      <div class="row">
        <div class="col-md-6">
          <div class="title">
            {state.globalState.companyInfo.location}
          </div>
          <h6 class="address">
            6 Iona Ballykeel 1
            Co Antrim BT42 4AQ
          </h6>
          <p>
            <strong>email:</strong><a href="mailto:info@xtremehairdressers.com">info@xtremehairdressers.com</a>
          </p>
        </div>

        <div class="col-md-6">
          <h6>Phone:</h6>
          <div class="title">
            028 25862343
          </div>
          <h6>Lunch Service:</h6>
          <p>Friday, Saturday & Sunday: <br/>
          Bookings from 12pm - 1:30pm
          </p>

          <h6>Dinner Service:</h6>
          <p>Daily: <br/>
          Bookings from 6pm - 9:30pm
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}
