import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
  <section id="TopImg">
  <div class="container">
    <div class="title">
      <h5>Welcome</h5>
      <h1>{state.globalState.companyInfo.title}</h1>
    </div>
    <div class="contact-info">
      <div class="container">
        <div class="booking">Book Now Directly</div>
        <h2>(028) 25876329</h2>
        <div class="hours">
          Opening Hours <strong>Tues - Sat: </strong> 9am - 5pm
          <strong> Weekend:</strong> 9am - 4pm
        </div>
      </div>
    </div>
  </div>
  </section>
  )
}
