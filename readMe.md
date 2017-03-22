When we started, we had some big questions about JS loading order and what would be defined.

We knew:
Scripts load in the order that they are presented in the html file.
All of our variables end up in the same namespace (if we aren't aren't careful to put them into modules).

We learned:
Our files might use things that seem to no exist yet, but that's okay with callback functions (called
  with event handles, or really anything async), because the invocation
won't actually happen until all the the JS files have loaded.

We still don't know:
how hoisting works across multiple files.
