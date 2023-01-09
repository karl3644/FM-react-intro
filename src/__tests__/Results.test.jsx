import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Results from "../Results";
import { StaticRouter } from "react-router-dom/server";

const pets = [
  {
    id: 1,
    name: "Luna",
    animal: "dog",
    city: "Seattle",
    state: "WA",
    description:
      "Luna is actually the most adorable dog in the world. Her hobbies include yelling at squirrels, aggressively napping on her owners' laps, and asking to be fed two hours before IT'S DAMN WELL TIME LUNA. Luna is beloved by her puppy parents and lazily resides currently in Seattle, Washington.",
    breed: "Havanese",
    images: [
      "http://pets-images.dev-apis.com/pets/dog25.jpg",
      "http://pets-images.dev-apis.com/pets/dog26.jpg",
      "http://pets-images.dev-apis.com/pets/dog27.jpg",
      "http://pets-images.dev-apis.com/pets/dog28.jpg",
      "http://pets-images.dev-apis.com/pets/dog29.jpg",
    ],
  },
  {
    id: 2,
    name: "Charisse",
    animal: "rabbit",
    city: "Lexington",
    state: "KY",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    breed: "Havanese",
    images: ["http://pets-images.dev-apis.com/pets/rabbit0.jpg"],
  },
  {
    id: 3,
    name: "Maitilde",
    animal: "rabbit",
    city: "Dallas",
    state: "TX",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    breed: "Lab",
    images: ["http://pets-images.dev-apis.com/pets/rabbit1.jpg"],
  },
  {
    id: 4,
    name: "Natalina",
    animal: "rabbit",
    city: "Tampa",
    state: "FL",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    breed: "Lab",
    images: ["http://pets-images.dev-apis.com/pets/rabbit2.jpg"],
  },
  {
    id: 5,
    name: "Michail",
    animal: "reptile",
    city: "Tuscaloosa",
    state: "AL",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    breed: "Havanese",
    images: ["http://pets-images.dev-apis.com/pets/reptile1.jpg"],
  },
  {
    id: 6,
    name: "Gizela",
    animal: "bird",
    city: "Carol Stream",
    state: "IL",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    breed: "Havanese",
    images: ["http://pets-images.dev-apis.com/pets/bird2.jpg"],
  },
  {
    id: 7,
    name: "Laughton",
    animal: "reptile",
    city: "Bridgeport",
    state: "CT",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    breed: "Havanese",
    images: ["http://pets-images.dev-apis.com/pets/reptile2.jpg"],
  },
  {
    id: 8,
    name: "Si",
    animal: "dog",
    city: "Charlotte",
    state: "NC",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    breed: "Lab",
    images: ["http://pets-images.dev-apis.com/pets/dog0.jpg"],
  },
  {
    id: 9,
    name: "Lyda",
    animal: "rabbit",
    city: "Springfield",
    state: "IL",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    breed: "Lab",
    images: ["http://pets-images.dev-apis.com/pets/rabbit3.jpg"],
  },
  {
    id: 10,
    name: "Jackquelin",
    animal: "dog",
    city: "Tucson",
    state: "AZ",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    breed: "Lab",
    images: ["http://pets-images.dev-apis.com/pets/dog1.jpg"],
  },
];

test("renders correctly with no pets", async () => {
  const { asFragment } = render(<Results pets={[]}></Results>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="search"
      >
        <h1>
          No pets found
        </h1>
      </div>
    </DocumentFragment>
  `);
});

test("renders correctly with some pets", async () => {
  const { asFragment } = render(
    <StaticRouter>
      <Results pets={pets} />
    </StaticRouter>
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="search"
      >
        <a
          class="pet"
          href="/details/1"
        >
          <div
            class="image-container"
          >
            <img
              alt="Luna"
              data-testid="thumbnail"
              src="http://pets-images.dev-apis.com/pets/dog25.jpg"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Luna
            </h1>
            <h2>
              dog - Havanese - Seattle, WA
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/2"
        >
          <div
            class="image-container"
          >
            <img
              alt="Charisse"
              data-testid="thumbnail"
              src="http://pets-images.dev-apis.com/pets/rabbit0.jpg"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Charisse
            </h1>
            <h2>
              rabbit - Havanese - Lexington, KY
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/3"
        >
          <div
            class="image-container"
          >
            <img
              alt="Maitilde"
              data-testid="thumbnail"
              src="http://pets-images.dev-apis.com/pets/rabbit1.jpg"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Maitilde
            </h1>
            <h2>
              rabbit - Lab - Dallas, TX
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/4"
        >
          <div
            class="image-container"
          >
            <img
              alt="Natalina"
              data-testid="thumbnail"
              src="http://pets-images.dev-apis.com/pets/rabbit2.jpg"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Natalina
            </h1>
            <h2>
              rabbit - Lab - Tampa, FL
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/5"
        >
          <div
            class="image-container"
          >
            <img
              alt="Michail"
              data-testid="thumbnail"
              src="http://pets-images.dev-apis.com/pets/reptile1.jpg"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Michail
            </h1>
            <h2>
              reptile - Havanese - Tuscaloosa, AL
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/6"
        >
          <div
            class="image-container"
          >
            <img
              alt="Gizela"
              data-testid="thumbnail"
              src="http://pets-images.dev-apis.com/pets/bird2.jpg"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Gizela
            </h1>
            <h2>
              bird - Havanese - Carol Stream, IL
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/7"
        >
          <div
            class="image-container"
          >
            <img
              alt="Laughton"
              data-testid="thumbnail"
              src="http://pets-images.dev-apis.com/pets/reptile2.jpg"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Laughton
            </h1>
            <h2>
              reptile - Havanese - Bridgeport, CT
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/8"
        >
          <div
            class="image-container"
          >
            <img
              alt="Si"
              data-testid="thumbnail"
              src="http://pets-images.dev-apis.com/pets/dog0.jpg"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Si
            </h1>
            <h2>
              dog - Lab - Charlotte, NC
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/9"
        >
          <div
            class="image-container"
          >
            <img
              alt="Lyda"
              data-testid="thumbnail"
              src="http://pets-images.dev-apis.com/pets/rabbit3.jpg"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Lyda
            </h1>
            <h2>
              rabbit - Lab - Springfield, IL
            </h2>
          </div>
        </a>
        <a
          class="pet"
          href="/details/10"
        >
          <div
            class="image-container"
          >
            <img
              alt="Jackquelin"
              data-testid="thumbnail"
              src="http://pets-images.dev-apis.com/pets/dog1.jpg"
            />
          </div>
          <div
            class="info"
          >
            <h1>
              Jackquelin
            </h1>
            <h2>
              dog - Lab - Tucson, AZ
            </h2>
          </div>
        </a>
      </div>
    </DocumentFragment>
  `);
});
