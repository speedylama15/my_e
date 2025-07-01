import "./App.css";

import {
  Paragraph,
  BulletList,
  Checklist,
  Heading,
  NumberedList,
  Quote,
  Verse,
} from "./playground";

function App() {
  return (
    <main className="app">
      <div className="app-container">
        <Paragraph indentLevel={0}>This</Paragraph>

        <Paragraph indentLevel={1}>This</Paragraph>
        <BulletList indentLevel={0}>This</BulletList>
        <NumberedList indentLevel={0} startNumber={1}>
          This
        </NumberedList>
        <Checklist>This</Checklist>

        <BulletList indentLevel={1}>Bullet List #2</BulletList>
        <NumberedList indentLevel={1} startNumber={12}>
          Numbered List #2
        </NumberedList>
        <Checklist indentLevel={1}>Checklist #2</Checklist>

        <BulletList indentLevel={2}>Bullet List #3</BulletList>
        <NumberedList indentLevel={2} startNumber={1}>
          Numbered List #3
        </NumberedList>
        <Checklist indentLevel={2}>Checklist #2</Checklist>
        <Checklist indentLevel={2}>Checklist #2</Checklist>
        <Checklist indentLevel={2}>Checklist #2</Checklist>

        <Heading headingLevel={1}>Psalm 23</Heading>
        <Paragraph indentLevel={0}>
          The Lord is my shepherd; I shall not want. He makes me lie down in
          green pastures. He leads me beside still waters. He restores my soul.
          He leads me in the paths of righteousness for his name's sake. Even
          though I walk through the valley of the shadow of death, I will fear
          no evil, for you are with me; your rod and your staff, they comfort
          me. You prepare a table before me in the presence of my enemies; you
          anoint my head with oil; my cup overflows. Surely goodness and mercy
          shall follow me all the days of my life, and I shall dwell in the
          house of the LORD forever.
        </Paragraph>

        <br />
        <Heading headingLevel={2}>Psalm 23</Heading>
        <Paragraph indentLevel={0}>
          The Lord is my shepherd; I shall not want. He makes me lie down in
          green pastures. He leads me beside still waters. He restores my soul.
          He leads me in the paths of righteousness for his name's sake. Even
          though I walk through the valley of the shadow of death, I will fear
          no evil, for you are with me; your rod and your staff, they comfort
          me. You prepare a table before me in the presence of my enemies; you
          anoint my head with oil; my cup overflows. Surely goodness and mercy
          shall follow me all the days of my life, and I shall dwell in the
          house of the LORD forever.
        </Paragraph>

        <br />
        <Heading headingLevel={3}>Psalm 23</Heading>
        <Paragraph indentLevel={0}>
          The Lord is my shepherd; I shall not want. He makes me lie down in
          green pastures. He leads me beside still waters. He restores my soul.
          He leads me in the paths of righteousness for his name's sake. Even
          though I walk through the valley of the shadow of death, I will fear
          no evil, for you are with me; your rod and your staff, they comfort
          me. You prepare a table before me in the presence of my enemies; you
          anoint my head with oil; my cup overflows. Surely goodness and mercy
          shall follow me all the days of my life, and I shall dwell in the
          house of the LORD forever.
        </Paragraph>

        <Quote>
          I am the way, and the truth, and the life. No one comes to the Father
          expect throught me.
        </Quote>

        <Paragraph indentLevel={0}>
          The Lord is my shepherd; I shall not want. He makes me lie down in
          green pastures. He leads me beside still waters. He restores my soul.
          He leads me in the paths of righteousness for his name's sake.
        </Paragraph>

        <Verse verseNumber={10}>
          Those who know your name trust in you, for you, LORD, have never
          forsaken those who seek you
        </Verse>

        <Verse verseNumber={21}>
          And everyone who calls on the name of the Lord will be saved
        </Verse>
      </div>
    </main>
  );
}

export default App;
