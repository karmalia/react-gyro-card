# GyroCard Component

The GyroCard component provides a React component that allows you to create a 3D perspective effect on its children elements based on mouse movement.

## Installation

To install the library, use the following command:

```bash
npm i react-gyro-card
```

Live Demo: [Codesandbox](https://codesandbox.io/p/sandbox/react-gyro-card-rsln6f?file=%2Fsrc%2Findex.js)

# Usage

Here's how you can use the GyroCard component in your React application:

```typescript
import React from "react";
import GyroCard from "gyrocard";

const App = () => {
  return (
    <div>
      <GyroCard strength={10} classNames="my-gyro-card">
        <div>Your 3D content here</div>
      </GyroCard>
    </div>
  );
};

export default App;
```

# Props

| Prop          | Type              | Default         | Description                                                                         |
| ------------- | ----------------- | --------------- | ----------------------------------------------------------------------------------- |
| `children`    | `React.ReactNode` | `undefined`     | The content to be displayed inside the GyroCard.                                    |
| `strength`    | `number`          | `12`            | The strength of the 3D effect.                                                      |
| `classNames`  | `string`          | `undefined`     | Custom class names to apply to the GyroCard.                                        |
| `duration`    | `number`          | `0.5`           | Duration of the transition effect in seconds.                                       |
| `easing`      | `string`          | `"ease-in-out"` | Easing function for the transition effect.                                          |
| `perspective` | `EPerspective`    | `default`       | Perspective value for the 3D effect. Accepts `high`, `default`, `low`, or `lowest`. |

---

## EPerspective `advance`

For chaning perspective, if you are not comfortable with this prop, don't change it.

```typescript
export enum EPerspective {
  "high" = 2000,
  "default" = 1000,
  "low" = 500,
  "lowest" = 100,
}
```

# License

This project is licensed under the MIT License.

# Contributions

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

# Contact

If you have any questions or feedback, feel free to contact me at [ismailsevgi95@gmail.com].
