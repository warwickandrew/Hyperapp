webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(19);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(16);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(18);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(17);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _ContactUs = __webpack_require__(13);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: 'Xtreme Hair Tanning Beauty',
  location: 'Ballymena Northern Ireland'
};

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs", "class": "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Make A Booking"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.globalState.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "address" },
              "6 Iona Ballykeel 1 Co Antrim BT42 4AQ"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email:"
              ),
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@xtremehairdressers.com" },
                "info@xtremehairdressers.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "028 25862343"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, Saturday & Sunday: ",
              (0, _hyperapp.h)("br", null),
              "Bookings from 12pm - 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Daily: ",
              (0, _hyperapp.h)("br", null),
              "Bookings from 6pm - 9:30pm"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "LOGO"
      ),
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Offers"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Book Appointment"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-facebook-square", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-twitter", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-google-plus", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-instagram", "aria-hidden": "true" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2018 Copyright"
      )
    )
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "Logo"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Offers"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Book Appointment"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "HairDressing is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor amet gastropub brunch tbh vice, man bun flannel fanny pack cliche readymade marfa ennui slow-carb affogato. Kickstarter skateboard direct trade shaman organic +1 marfa banjo chicharrones glossier fingerstache tilde. Narwhal 90's normcore salvia williamsburg keytar seitan intelligentsia letterpress. Ennui ramps affogato activated charcoal cliche. Man bun art party tilde put a bird on it celiac literally enamel pin pinterest fam woke. Vexillologist seitan kickstarter food truck ethical pok pok gentrify. 8-bit vape fam, everyday carry vexillologist godard asymmetrical schlitz edison bulb knausgaard air plant viral."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"The best hair dressers in town\" - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mary Murphy"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "RandomQuote" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"The Best Hairdressers Never Stop Learning, It's An Art\""
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        "- Salon International -"
      )
    )
  );
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu", "class": "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Specials Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Unique Boutique Offers"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "\xA325"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Full Cut Wash & Blow Dry"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Washing, Mesh, Cut, Blow Dry, T-Bar on top"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "\xA325"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Full Cut Wash & Blow Dry"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Washing, Mesh, Cut, Blow Dry, T-Bar on top"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "\xA325"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Full Cut Wash & Blow Dry"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Washing, Mesh, Cut, Blow Dry, T-Bar on top"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "\xA325"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Full Cut Wash & Blow Dry"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Washing, Mesh, Cut, Blow Dry, T-Bar on top"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "\xA325"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Full Cut Wash & Blow Dry"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Washing, Mesh, Cut, Blow Dry, T-Bar on top"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box" },
            (0, _hyperapp.h)(
              "div",
              { "class": "box-img" },
              (0, _hyperapp.h)(
                "div",
                { "class": "price-circle" },
                "\xA325"
              )
            ),
            (0, _hyperapp.h)(
              "span",
              { "class": "title" },
              "Full Cut Wash & Blow Dry"
            ),
            (0, _hyperapp.h)(
              "p",
              { "class": "details" },
              "Washing, Mesh, Cut, Blow Dry, T-Bar on top"
            )
          )
        )
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "View Full Menu"
      )
    )
  );
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.globalState.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            "Book Now Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(028) 25876329"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Tues - Sat: "
            ),
            " 9am - 5pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Weekend:"
            ),
            " 9am - 4pm"
          )
        )
      )
    )
  );
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      actions.intro();
    }
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[20]);