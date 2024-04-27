/* eslint-enable */
import { forwardRef } from "react";
import "./style.css";
export const DogSpinner = () => (
  <div className="load-container bg-[--bg]"></div>
);

export const DogContainer = forwardRef(({ children }, ref) => (
  <div ref={ref} className="h-40" position="relative">
    {children}
  </div>
));
DogContainer.displayName = "DogContainer";

// export function DogContainer(props) {
//   <div className="h-40" position="relative">
//     {props.children}
//   </div>;
// }

// export default function Loader  ()  {
//   return (
//     <DogContainer>
//       <DogSpinner />
//     </DogContainer>
//   );
// };
