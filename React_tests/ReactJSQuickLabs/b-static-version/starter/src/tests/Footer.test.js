import React from "react";
import { create } from "react-test-renderer";

import Footer from "../Components/Footer";

test('Footer matches snapshot', () => {
    const header = create(<Footer />);

    expect(header.toJSON()).toMatchSnapshot();
});