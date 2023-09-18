"use client"; // we just need to add this. It's not important today, but we will revisit it later.

/**
 * In our project we use the `@mui/material` package which provides us with the building blocks for our website.
 * These blocks, called components, are what we use to build and style our website.
 *
 * For instance, the `Container` component makes it so that whatever is inside doesn't take up the entire width of the page.
 * The `Typography` component is used to display text.
 *
 * We're going more in-depth on MUI components at a later stage, but for now, let's use them to build our Tic Tac Toe game.
 * The documentation for `@mui/material` is available at https://mui.com/material-ui/getting-started/
 */
import { ButtonBase, Container, Stack, Typography } from "@mui/material";

/**
 * Just like the components from `@mui/material`, we can also use components from our own project. Components are
 * just functions that return JSX, which is just a special syntax for JavaScript to make it easier to write components.
 *
 * It's very similar to HTML if you're familiar with that. If not, don't worry, we'll go through it in more detail later.
 *
 * In addition to `@mui/material`, one of the core packages we use is Next.js. Next.js is a framework (i.e. an extension of React)
 * that makes it easier to build websites. We will also go more in-depth on Next.js later, but for now, let's create our very first
 * web page.
 *
 * To create a new page, we create a new folder in the `app` folder called `tic-tac-toe`. Inside this folder, we create a new
 * `page.tsx`-file. Then, we use something called a default export to export the component we want to use as our page.
 * If the above paragraph didn't make any sense, don't worry, it's not important right now. It's something you'll get
 * used to as we work with React.
 *
 * After adding the file, you can access the page at http://localhost:3000/tic-tac-toe
 */
export default function TicTacToePage() {
  return (
    <Container>
      {/* This is how we write JSX. We create a container, and inside the container, we add some text. */}
      <Typography>
        {/* Here you can write whatever you want, and as you save the file (CMD/CTRL + S), you'll see the changes reflected in your browser */}
        My Super Awesome Tic Tac Toe Game
        {/* We can add our own component to the page! */}
      </Typography>
      <ClickableTicTacToeGame />
    </Container>
  );
}

/**
 * Now that we have a page, let's create a component for our Tic Tac Toe game. We'll call it `TicTacToeGame`.
 *
 * Just like above, we create a new function, just without the `export default` part.
 * To get started, return some text from the function so that we can see that it works.
 *
 * After adding the component inside the container in TicTacToePage, you'll see the text you returned appear on the page!
 * Any changes you make here will be reflected as you save.
 */
function TicTacToeGame() {
  return (
    <Stack direction="column">
      <Stack direction="row">
        <ButtonBase>1</ButtonBase>
        <ButtonBase>2</ButtonBase>
        <ButtonBase>3</ButtonBase>
      </Stack>
      <Stack direction="row">
        <ButtonBase>4</ButtonBase>
        <ButtonBase>5</ButtonBase>
        <ButtonBase>6</ButtonBase>
      </Stack>
      <Stack direction="row">
        <ButtonBase>7</ButtonBase>
        <ButtonBase>8</ButtonBase>
        <ButtonBase>9</ButtonBase>
      </Stack>
    </Stack>
  );
}

/**
 * This is a lot of code to repeat, and `ButtonBase` is not a very descriptive name. Just like above, let's create our
 * own component instead!
 *
 * To display what `value` is, and not just the word "value", we have to wrap it inside curly braces. This is how we
 * write JavaScript inside JSX. You'll notice that the color changes, and when you save, you will have your numbered
 * buttons back!
 *
 * This is exactly the same as what we did with <Stack direction="row" />, where the Stack component accepts a prop called `direction`
 */
function Square({ value }: { value: string }) {
  return <ButtonBase>{value}</ButtonBase>;
}

/**
 * But now everything is just a bunch of X's, that's not very useful! It's time to introduce the concept of props.
 */
function TicTacToeGame2() {
  return (
    <Stack direction="column">
      <Stack direction="row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </Stack>
      <Stack direction="row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </Stack>
      <Stack direction="row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </Stack>
    </Stack>
  );
}

/**
 * To add some interactivity, we use the `onClick` prop, which already exists on the `ButtonBase` component, just like our `value` prop!
 * the `onClick` prop tells React what to do when we click the square. To start with, we just want to print something.
 */
function ClickableSquare({ value }: { value: string }) {
  function handleClick() {
    console.log("clicked a square");
  }
  return <ButtonBase onClick={handleClick}>{value}</ButtonBase>;
}

/**
 * But there's not a lot happening here. We have some numbers, but nothing happens when we click or anything like that.
 * Makes for a pretty boring game, right?
 *
 * Let's start adding some interactivity to our game! We'll start by just making something happen when we click
 * the buttons.
 */
function ClickableTicTacToeGame() {
  return (
    <Stack direction="column">
      <Stack direction="row">
        <ClickableSquare value="1" />
        <ClickableSquare value="2" />
        <ClickableSquare value="3" />
      </Stack>
      <Stack direction="row">
        <ClickableSquare value="4" />
        <ClickableSquare value="5" />
        <ClickableSquare value="6" />
      </Stack>
      <Stack direction="row">
        <ClickableSquare value="7" />
        <ClickableSquare value="8" />
        <ClickableSquare value="9" />
      </Stack>
    </Stack>
  );
}
