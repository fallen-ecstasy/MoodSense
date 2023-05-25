import React, { useState } from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import './MoodStyle.css';
import SelectButton from './component/SelectButton';
function MoodTracker() {
    const [Screen, setScreen] = useState(1);
    const [User, setUser] = useState({name:"",age:0});
    const [Stage1, setStage1] = useState(0);
    const [Stage2, setStage2] = useState(0);
    const [Stage3, setStage3] = useState(0);

    const handleNameChange = (e) => setUser({name : e.currentTarget.value});
    const handleAgeChange = (e) => setUser({age : e.currentTarget.value});


  return (
    <div className='DOMContainer'>
        <div className='Heading__title'>MoodSense</div>
        <div className='Heading__tagline'>"Unlock the Power of Emotions"</div>

        {/* TODO : Screen 1 */}
        {/* <div className='ScreenOne'>
            <div className='Greeting'><div className='Wave'>👋🏻</div> Hello! Welcome Here.</div>
            <div className='Describe'>We are here to revolutionize the way you understand and connect with your emotions.</div>
            <div className='Form'>
            <Stack spacing={3}>
            <Input name='name' onChange={handleNameChange} variant='outline' placeholder='Name' htmlSize={10} width='auto' />
            <Input name='age' onChange={handleAgeChange} variant='outline' placeholder='Age' />
            <Button colorScheme='teal'>Next!</Button>
            </Stack>
            </div>
        </div> */}
        <div className='ScreenTwo'>
        <div className='Describe'>Embark on a mood journey and choose the emotion that resonates with you the most right now.</div>
            <div className='Question'>How are you Feeling? Choose Option according to your <b>MOOD</b> right now.</div>
            <div className='Option_container'>
                <SelectButton options={['Happy','Sad','Disgusted','Angry','Fearful','Bad','Surprised']} />
            </div>
        </div>
    </div>
  )
}

export default MoodTracker