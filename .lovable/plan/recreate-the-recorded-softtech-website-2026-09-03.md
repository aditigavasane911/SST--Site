# Recreate the recorded Softtech website

## Scope
- Rebuild the single scrolling homepage shown in the recording at `/`.
- Match the recorded desktop layout, typography, spacing, colors, borders, icons, gradients, and sticky navigation.
- Reproduce all visible sections: hero and enquiry form, metrics, story, learning paths, technology stack, learner benefits, FAQ, awards, testimonials, and footer.
- Make navigation and calls-to-action scroll to the corresponding page sections, with a functional FAQ accordion and form controls.
- Preserve the same visual hierarchy responsively on smaller screens.

## Technical approach
- Define the recorded palette, typography, sizing, shadows, and component styles as semantic tokens in `src/styles.css`.
- Implement the page in `src/routes/index.tsx` using React and Lucide icons.
- Reconstruct the visible logo from the supplied recording and store it through the project asset flow.
- Add route-specific metadata and replace template metadata.
- Verify the result against the recording at the source viewport and test the key interactions.
