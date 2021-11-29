import '@testing-library/jest-dom'
import 'regenerator-runtime/runtime'
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Configure Enzyme with React 17 adapter
Enzyme.configure({ adapter: new Adapter() });