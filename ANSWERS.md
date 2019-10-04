- [ ] Why would you use class component over function components (removing hooks from the question)?

      Class components give access to lifecylcle methods and component state. If we're not using hooks, we need class components to store component state and make updates to the ui via lifecycle methods: componentDidMount, componentWillUpdate, componentDidUpdate, componentWillUnmount, componentDidUnmount

- [ ] Name three lifecycle methods and their purposes.

      `componentDidMount()` is invoked after a component is added to the dom. This function is a good place to make api requests or set up subscriptions.

      `componentDidUpdate()` is invoked immediately after updating occurs (state change is great example). This is a good place to make network requests that depend on previous props. Pagination, for example. Or a search or filter.

      `componentWillUnMount()` is invoked immediately before a component is unmounted and destroyed. This is a great place to remove subscriptions or event listeners, cancel api requests, invalidate timers.

- [ ] What is the purpose of a custom hook?

      A custom hook allows developers to isolate non visual behavior in their application so that it can be re-used elsewhere. API requests are a great example of non visual behavior that can be abstracted into a custom hook.

- [ ] Why is it important to test our apps?

      Testing helps ensure our code behaves the way we intend it, allows us to match product definition to function result, increases maintainability, and acts as a first pass of documentation.
