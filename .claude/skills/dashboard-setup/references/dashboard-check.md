# Dashboard Check

Use this before calling a dashboard finished.

## Opens

- Open the page the way a member will: double-click the file, or load its file
  path in a browser. It must show the sample data, not an empty "no data" state.
- The sample data is inlined in the page, so it renders with no server and no
  separate file load. A page that depends on `fetch()` or an un-included script
  opens blank from a file path and fails this check.
- Confirm this by actually opening the page, not by running its logic on its own.
  A page can pass every calculation and still open blank.

## Data

- Every displayed number says where it comes from or how it is calculated.
- Sample data is labeled as sample data.
- The dashboard says how current the data is.
- Charts and tables agree on what one row or data point represents.
- Calculated numbers can be checked from the source data.
- Anything left out is named.

## Screen Behavior

- The first screen answers the primary question.
- Narrowing controls do not hide all context by default.
- Tables handle no data, loading, and long-text rows.
- Charts have explicit container dimensions.
- Axes, labels, and units are readable on desktop and mobile.
- Important numbers include comparison, date range, or status where needed.
- Compact views still have enough spacing to scan.

## Usefulness

- The dashboard makes the next action visible.
- It distinguishes signal from decoration.
- It does not overstate confidence.
- It avoids nice-looking numbers that do not change what anyone does.
- It shows blockers, unusual results, or problem areas when those drive action.

## Builder Notes

- Include dashboard plan.
- Include data checklist.
- Include sample `data.json` or instructions for finding the source data.
- Include final check.
- Include build notes for the target app or agent.
- Include known limitations.
