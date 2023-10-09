import React from "react";
import '../../setupTests';
import { shallow } from "enzyme";
import Price from "../components/Price/Price";
import {mockData} from "../components/Price/Price";

describe("Price component", () => {
  it("renders the correct title", () => {
    const wrapper = shallow(<Price />);
    const title = wrapper.find(".price__title");
    expect(title.text()).toEqual("Услуги и цены");
  });

  it("renders the correct subtitle", () => {
    const wrapper = shallow(<Price />);
    const subtitle = wrapper.find(".price__subtitle");
    expect(subtitle.text()).toEqual("Добро пожаловать в Be man barbershop!");
  });

  it("renders the correct number of tabs", () => {
    const wrapper = shallow(<Price />);
    const tabs = wrapper.find(".price__tab-item");
    expect(tabs.length).toEqual(mockData.meta.dataTypes.length);
  });

  it("renders the correct tab as active", () => {
    const wrapper = shallow(<Price />);
    const activeTab = wrapper.find(".price__tab-item.active");
    expect(activeTab.length).toEqual(1);
    expect(activeTab.text()).toEqual(mockData.meta.dataTypes[0].text);
  });

  it("renders the correct number of services", () => {
    const wrapper = shallow(<Price />);
    const services = wrapper.find(".price__services-item");
    expect(services.length).toEqual(mockData.data.filter((item) => item.id === mockData.meta.dataTypes[0].id).length);
  });

  it("renders the correct service title and price", () => {
  const wrapper = shallow(<Price />);
  const service = wrapper.find(".price__services-item").at(0);
  const data = mockData.data.filter((item) => item.id === mockData.meta.dataTypes[0].id)[0];
  expect(service.find(".price__services-services").text()).toEqual(data.title);
  expect(parseInt(service.find(".price__services-price").text())).toEqual(data.price);
});

it("renders the correct number of services in each tab", () => {
  const wrapper = shallow(<Price />);
  const tabs = wrapper.find(".price__tab-item");

  tabs.forEach((tab) => {
    const tabId = tab.prop("data-tab");
    const services = wrapper.find(`.price__services[data-tab="${tabId}"] .price__services-item`);
    const expectedServiceCount = mockData.data.filter((item) => item.id === tabId).length;

    expect(services.length).toEqual(expectedServiceCount);
  });
});
});