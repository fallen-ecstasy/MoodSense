import React, { useRef, useState } from 'react';
import { Button, FormControl, FormErrorMessage, Input, Stack } from '@chakra-ui/react';
import './MoodStyle.css';
import SelectButton from './component/SelectButton';
function MoodTracker() {
    const Stage1Options = ['Happy','Sad','Disgusted','Angry','Fearful','Bad','Surprised'];
    const Stage2Options = [
        ['Playful','Content','Interested','Proud','Accepted','Powerful','Peaceful','Trusting','Optimistic'],
        ['Lonely','Vulnerable','Despair','Guilty','Depressed','Hurt'],
        ['Disapproving','Disappointed','Awful','Repelled'],
        ['Let Down','Humiliated','Bitter','Mad','Aggresive','Frustated','Distant','Critical'],
        ['Scared','Anxious','Insecure','Weak','Rejected','Threatened'],
        ['Bored','Busy','Stressed','Tired'],
        ['Startled','Confused','Amazed','Excited']];

    const Stage3Options = [
        [['Aroused','Cheeky'],['Free','Joyful'],['Curious','Inquisitive'],['Successful','Confident'],['Respected','Valued'],['Courageous','Creative'],['Loving','Thankful'],['Sensitive','Intimate'],['Hopeful','Inspired']],
        [['Isolated','Abandoned'],['Victimised','Fragile'],['Grief','Powerless'],['Ashamed','Remorseful'],['Inferior','Empty'],['Embarrased','Disappointed']],
        [['Judgemental','Embarrased'],['Appalled','Revolted'],['Nauseated','Detestable'],['Horrified','Hesistant']],
        [['Betrayed','Resentful'],['Disrespected','Ridiculed'],['Indignant','Violated'],['Furious','Jealous'],['Provoked','Hostile'],['Infuriated','Annoyed'],['Withdrawn','Numb'],['Sceptical','Dismissive']],
        [['Helpless','Frightened'],['Overwhelmed','Worried'],['Inadequate','Inferior'],['Worthless','Insignificant'],['Excluded','Persecuted'],['Nervous','Exposed']],
        [['Indifferent','Apathetic'],['Pressured','Rushed'],['Overwhelmed','Out of control'],['Sleepy','Unfocused']],
        [['Shocked','Dismayed'],['Disillusioned','Perplexed'],['Astonished','Awe'],['Eager','Energetic']]
    ]
    const Colors = [
        ['#ffebbe','#ffdb88','#FDCB5A'],
        ['#bdd3ff','#86aeff','#4F86F7'],
        ['#eeffdb','#d0ebb2','#AED581'],
        ['#ffc9c9','#ffa3a3','#F85C5C'],
        ['#edc4ff','#b97ed3','#8E44AD'],
        ['#e6e6e6','#c3c3c3','#A9A9A9'],
        ['#ffd0e0','#ffb1cb','#FF7FAC']
    ]
    const [Screen, setScreen] = useState(1);
    const [User, setUser] = useState({name:" ",age:1});
    const [Stage1, setStage1] = useState(0);
    const [Stage2, setStage2] = useState(0);
    const [Stage3, setStage3] = useState(0);
    const [BGColor, setBGColor] = useState({color:"#fff",val:0});
    const Stage1Ref = useRef();
    const Stage2Ref = useRef();
    const Stage3Ref = useRef();
    
    const handleClick2 = () =>{
        const opt = Stage1Ref.current.getOptionSelected();
        console.log(opt);
        setStage1(opt);
        setScreen(3);
        setBGColor({...BGColor,color:Colors[opt][BGColor.val]});
    }

    const handleClick3 = () =>{
        const opt = Stage2Ref.current.getOptionSelected();
        console.log(opt);
        setStage2(opt);
        setScreen(4);
        setBGColor({...BGColor,color:Colors[Stage1][BGColor.val+1], val:BGColor.val+1});
    }

    const handleClick4 = () =>{
        const opt = Stage3Ref.current.getOptionSelected();
        console.log(opt);
        setStage3(opt);
        setScreen(5);
        setBGColor({...BGColor,color:Colors[Stage1][BGColor.val+1], val:BGColor.val+1});
    }

    const handleNameChange = (e) => setUser({...User,name : e.currentTarget.value});
    const handleAgeChange = (e) => setUser({...User,age : e.currentTarget.value});


  return (
    <div className='DOMContainer' style={{background: BGColor.color}}>
        <div className='Heading__title'>MoodSense</div>
        <div className='Heading__tagline'>"Unlock the Power of Emotions"</div>
        <div className='Screens'>
        {/* TODO : Screen 1 */}
        <div className={(Screen === 1)?"ScreenOne":"Disabled"}>
            <div className='Greeting'><div className='Wave'>👋🏻</div> Hello! Welcome Here.</div>
            <div className='Describe'>We are here to revolutionize the way you understand and connect with your emotions.</div>
            <div className='Form'>
            <FormControl isInvalid={(User.name=="" || User.age==0)}>
            <Stack spacing={3}>
            <FormErrorMessage>Enter Name and Age to Continue</FormErrorMessage>
            <Input id="NameIn" name='name' onChange={handleNameChange} variant='filled' placeholder='Name' htmlSize={10} width='auto' />
            <Input id="AgeIn" name='age' onChange={handleAgeChange} variant='filled' placeholder='Age' />
            <Button isDisabled={(User.name=="" || User.age==0)} onClick={()=>setScreen(2)} colorScheme='teal'>Next!</Button>
            </Stack>
            </FormControl>
            </div>
        </div>
        <div className={(Screen === 2)?"ScreenTwo":"Disabled"}>
        <div className='Describe'>Embark on a mood journey and choose the emotion that resonates with you the most right now.</div>
            <Stack spacing={3}>
            <div className='Question'>Hello! {User.name} , How are you Feeling? Choose Option according to your <b>MOOD</b> right now.</div>
            <SelectButton ref={Stage1Ref} options={Stage1Options} />
            <Button onClick={handleClick2} colorScheme='teal'>Save & Next!</Button>
            </Stack>
        </div>
        <div className={(Screen === 3)?"ScreenThree":"Disabled"}>
        <div className='Describe'>Embark on a mood journey and choose the emotion that resonates with you the most right now.</div>
            <Stack spacing={3}>
            <div className='Question'>Dig deeper into your mood. Choose a specific <b>SUB-MOOD</b> that resonates with you right now.</div>
            <SelectButton ref={Stage2Ref} options={Stage2Options[Stage1]} />
            <Button onClick={handleClick3} colorScheme='teal'>Save & Next!</Button>
            </Stack>
        </div>
        <div className={(Screen === 4)?"ScreenFour":"Disabled"}>
        <div className='Describe'>Embark on a mood journey and choose the emotion that resonates with you the most right now.</div>
            <Stack spacing={3}>
            <div className='Question'>Embrace your true mood. Pick between these two and reveal your authentic emotional state.</div>
            <SelectButton ref={Stage3Ref} options={Stage3Options[Stage1][Stage2]} />
            <Button onClick={handleClick4} colorScheme='teal'>Save & Next!</Button>
            </Stack>
        </div>
        <div className={(Screen === 5)?"ScreenFive":"Disabled"}>
        <div className='OpenLine'>{User.name}! , We want you to...</div>
        <div className='Result'>Behold your authentic mood: <span style={{color: BGColor.color}} className='Mood'>{Stage3Options[Stage1][Stage2][Stage3]}</span> .</div>
        <Button colorScheme="green" onClick={()=>setScreen(1)}>Reset The Test</Button>
        </div>
        </div>
        
    </div>
  )
}

export default MoodTracker