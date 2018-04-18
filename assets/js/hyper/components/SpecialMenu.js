import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  return (
  <section id="SpecialMenu" class="texturebg">
  <div class="container">
    <h5 class="comp-title">Specials Menu</h5>
    <h2>Unique Boutique Offers</h2>
    <div class="row boxes">
      <div class="col-md-4">
        <div class="box">
          <div class="box-img">
            <div class="price-circle">£25</div>
          </div>
          <span class="title">Full Cut Wash & Blow Dry</span>
          <p class="details">Washing, Mesh, Cut, Blow Dry, T-Bar on top</p>
        </div>
      </div>
      <div class="col-md-4">
      <div class="box">
        <div class="box-img">
          <div class="price-circle">£25</div>
        </div>
        <span class="title">Full Cut Wash & Blow Dry</span>
        <p class="details">Washing, Mesh, Cut, Blow Dry, T-Bar on top</p>
      </div>
      </div>
      <div class="col-md-4">
      <div class="box">
        <div class="box-img">
          <div class="price-circle">£25</div>
        </div>
        <span class="title">Full Cut Wash & Blow Dry</span>
        <p class="details">Washing, Mesh, Cut, Blow Dry, T-Bar on top</p>
      </div>
      </div>
    </div>
      <a href="#" class="link">View Full Menu</a>
  </div>
</section>
  )
}
