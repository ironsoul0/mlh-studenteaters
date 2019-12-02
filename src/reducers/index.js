const initialState = {
  posts: [
    {
      name: "Free Flow",
      category: "Eating",
      comments: [
        {
          author: "Alibek Zhumagaliev",
          content: "Whether it's for a spritz or two or an long lazy lunch, here are the new-ish places to snag a spot at for that annual diary date."
        },
        {
          author: "​Akmaral Kudaibergen",
          content: "You know by now that the Espy is back. You cannot not know. The fanfare around the phoenix-like rising of the place that holds the secret shames of countless Melburnians, collected over its 100-plus years of operation as luxury hotel and infamous music venue, has been Royal News huge."
        },
        {
          author: "Joe Donag",
          content: "You could stretch to a royal connection if you think that the work of the Sand Hill Road pub group, whose schtick is to transform old venues like the Prahran and Bridge hotels into glitzy playgrounds for adults, makes them kings of the reinvention game."
        },
        {
          author: "Temirzhan Yussupov",
          content: "Not everyone holds with that. Some worried they'd ruin the natural charms of an institution whose sticky carpets and beer lines might have qualified for historical protections."
        }
      ],
      id: 0
    },
    {
      name: "Health Project",
      category: "Eating",
      comments: [
        {
          author: "Aman Kiyakov",
          content: "So. How is it? That's a question too big to answer in one page. Top to bottom, Hotel Esplanade comprises 10 bars, two restaurants, podcast studios and the revamped 550-person Gershwin Room. But topline notes. It is busy."
        },
        {
          author: "Akezhan Rakishev",
          content: "Queue busy. Paul Kelly's checked in and everyone's flooding social feeds with that dramatic sweeping staircase, framed by peeling paint."
        },
        {
          author: "Someone cool",
          content: "Every care has been taken to preserve the soul of the venue while providing something new. Take the Gershwin Room. Beyond a good scrub and a new sound system, the famous bandroom, which has hosted the likes of PJ Harvey"
        },
        {
          author: "Tronal Kreon",
          content: "On the other hand, the front terrace is unrecognisable. Stripey umbrellas and a retractable glass roof speak more of the pavilion's seaside location than its grungy history."
        }
      ],
      id: 1
    },
    {
      name: "6 Inch",
      category: "Eating",
      comments: [
        {
          author: "Jogh Kepez",
          content: "The attention to detail throughout the venue is impressive, and this extends to the Espy Kitchen. Overseen by executive chef Ash Hicks, the kitchen itself features two grills, two wood-fired pizza ovens and a rotisserie, and it is the equipment that informs the menu – think grass-fed beef from the grill section, French-style rotisserie chicken, and pizzas."
        },
        {
          author: "Kanelo Trezona",
          content: "Naturally, there is a seafood section, including a raw bar and daily crudo, lots of salads and desserts such as soft serve. Again, there is something for everyone."
        },
        {
          author: "Muni Suleybaiev",
          content: "It all opened on Friday, except Mya Tiger, which will open on December 3. The reborn Espy might just be the mouth-to-mouth St Kilda needed. Welcome back."
        },
        {
          author: "John Criston",
          content: "Take the Gershwin Room. Beyond a good scrub and a new sound system, the famous bandroom, which has hosted the likes of PJ Harvey, The Living End, and Public Enemy as well as music quiz show RockWiz, is virtually untouched."
        }
      ],
      id: 2
    },
    {
      name: "Kunde",
      category: "Eating",
      comments: [
        {
          author: "Treo Anuarov",
          content: "Felstead (Prime, Foveaux) never produces a boring menu: even Rita's simple opening menu shows signs of his days as a high-end deg chef. One dish he describes as a bit like a bolognese but not. The kitchen slow-roasts wagyu."
        },
        {
          author: "Shuro Prolez",
          content: "With that now pushed back to next year, former Weeds chef Darrell Felstead has stolen a march near his old digs, opening Rita's at the redeveloped Cat and Fiddle Hotel."
        },
        {
          author: "Grigoriy Trolov",
          content: "Freddie Green's opens at Green Square this week, the Italian restaurant with the Anglo-sounding moniker receiving its culinary inspiration from an unlikely place: a French fine diner."
        },
        {
          author: "Vladimir Groten",
          content: "The pork liver parfait is matched with his blood orange powder, pizza Felstead-style might be topped with zucchini flower and sumac, while his interpretation of spag bol is served with udon."
        }
      ],
      id: 3
    }
  ],
  chosen: -1,
  editMode: false,
  loggedIn: true,
  feedbackText: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_POST": {
      return {
        ...state,
        chosen: action.chosen
      }
    }
    case "TOGGLE_EDIT": {
      return {
        ...state,
        editMode: !state.editMode
      }
    }
    case "FEEDBACK_CHANGE": {
      return {
        ...state,
        feedbackText: action.text
      }
    }
    case "SUBMIT_FEEDBACK": {
      const nextState = { ...state };
      nextState.posts = [...state.posts];
      nextState.posts[state.chosen].comments.push({
        author: "Ray Morty",
        content: state.feedbackText
      });
      nextState.feedbackText = "";
      return nextState;
    }
    default:
      return state;
  }
}

export default reducer;