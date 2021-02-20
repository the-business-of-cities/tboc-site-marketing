import React from "react";
import Home from "../index";
import { shallow } from '../../utils/tests';

const data = {
  contentfulHomeSettings: {
    edges: [
      {
        node: {
          homeDescription: {
            homeDescription: 'some description',
          },
          homeBanner: [
            {
              text: 'banner text',
              description: 'something',
              image: {
                file: {
                  url: 'url'
                }
              }
            }
          ]
        }
      }
    ]
  },
  contentfulPage: {
    title: "Home",
    content: [
      {
        backgroundImage: {
          file: {
            url: 'someurl'
          }
        },
        content: "some comtent here",
        ctaTarget: {
          title: 'some title'
        },
        ctaText: 'cta text',
      }
    ],
    partnerCategory: [
      {
        title: 'category name',
        partner: [
          {
            image: 'someurl',
            title: 'partner name',
          }
        ],
      }
    ]
  }
}

describe("Home", () => {
  it("renders correctly", () => {
    expect(shallow(<Home data={data}/>)).toMatchSnapshot();
  });
});
