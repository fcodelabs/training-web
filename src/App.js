import Card from './DiaryCard/DiaryCard';
import DiaryHome from './DiaryHome/DiaryHome';
import './App.css';

function App() {
  return (
    <>
      <div className='card-home'>
        <DiaryHome/>
      </div>
      <div className="App">
        <Card title="Reasons Why Learning English is so Important" subtitle="Noah" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur eos sequi odit deserunt unde libero officiis nostrum odio, soluta dignissimos, ipsum eius placeat similique ex quae obcaecati laborum ut!" color="#AFEEEE"/>
        <Card title="Reasons Why Learning English is so Important" subtitle="Noah" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur eos sequi odit deserunt unde libero officiis nostrum odio, soluta dignissimos, ipsum eius placeat similique ex quae obcaecati laborum ut!" color="#AFEEEE"/>
        <Card title="Reasons Why Learning English is so Important" subtitle="Noah" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur eos sequi odit deserunt unde libero officiis nostrum odio, soluta dignissimos, ipsum eius placeat similique ex quae obcaecati laborum ut!" color="#AFEEEE"/>
        <Card title="Reasons Why Learning English is so Important" subtitle="Noah" description="Lorem, ipsum dolor" color="#AFEEEE"/>
      </div>
    </>
  );
}

export default App;
