import Tab from "./Tab";

export default function TabComponent() {
  function RandomComponent() {
    return <div>Some random content</div>;
  }
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentIndex) {
    console.log(currentIndex);
  }

  return <Tab tabContent={tabs} onChange={handleChange} />;
}
