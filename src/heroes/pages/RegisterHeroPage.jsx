import { Panorama, Upload, UploadFile, UploadFileOutlined, UploadOutlined } from '@mui/icons-material';
import { Box, Button, Divider, Grid, IconButton, ListItem, TextField } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { useForm } from '../../hooks/useForm';

export const RegisterHeroPage = () => {

  const [nameImage, setNameImage] = useState('');
  const input = useRef();
  const { user } = useContext(AuthContext);
  const { id, superhero, publisher, alter_ego, first_appearance, characters, onChange } = useForm({
    id: '',
    superhero: '',
    publisher: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
  });
  
  const obtenerNombre = () => {
    const s = input.current.files[0]
    if(input.current.files.length === 0) {
      setNameImage('')
      return
    }else{
      setNameImage(s.name+''.toLocaleLowerCase());
    };
  }
  const onInputSubmit = (value) => {
    value.preventDefault(); 
    if( 
      id.trim().length <= 0 || 
      superhero.trim().length <= 0 ||
      publisher.trim().length <= 0 ||
      alter_ego.trim().length <= 0 ||
      first_appearance.trim().length <= 0 ||
      characters.trim().length <= 0 || 
      input.current.files.length === 0
      ) return; 
      registrarHero();
  }
  const registrarHero = async () => {
    const method = 'POST';
    const header = {
      'x-token':user.token
    };
    const formData = new FormData();
    formData.append('idd', id);
    formData.append('superhero', superhero);
    formData.append('publisher', publisher);
    formData.append('alter_ego', alter_ego);
    formData.append('first_appearance', first_appearance);
    formData.append('characters', characters);
    formData.append('image', input.current.files[0])

    const resp = await fetch('http://localhost:8080/hero',{
      method: method,
      headers: header,
      body: formData,
    })
    const data = await resp.json();
    console.log(data);
  }

  return (
    <>
        <h1 className='justify-content-center'>Register Hero Page</h1>
        <hr />
        <Grid 
          container 
          alignItems="center"
          justifyContent='center'
          >
          <Grid 
            item
            className='box-shadow'
            xs={9}
            sx={{display: 'flex', borderRadius: '10px', p:4 , flexWrap: 'wrap'}}
            >

          <form onSubmit={onInputSubmit}>
            
            <TextField 
              sx={{marginBottom: '10px', marginRight: '15px', width: '49vh'}} 
              variant="outlined" 
              placeholder='Id'
              name="id"
              value={id}
              onChange={onChange}
              />
            <TextField 
              sx={{marginBottom: '10px'}} 
              variant="outlined" 
              placeholder='superhero' 
              name="superhero"
              value={superhero}
              onChange={onChange}
              className='formControl'
              />
            <TextField 
              sx={{marginBottom: '10px', marginRight: '15px', width: '49vh'}} 
              variant="outlined" 
              placeholder='publisher' 
              name="publisher"
              value={publisher}
              onChange={onChange}
               />
            <TextField 
              sx={{marginBottom: '10px'}} 
              variant="outlined" 
              placeholder='alter_ego' 
              name="alter_ego"
              value={alter_ego}
              onChange={onChange}
              className='formControl'
              />
            <TextField 
              sx={{marginBottom: '10px'}} 
              variant="outlined" 
              placeholder='first_appearance' 
              name="first_appearance"
              value={first_appearance}
              onChange={onChange}
              fullWidth
              />
            <TextField 
              sx={{marginBottom: '10px'}} 
              variant="outlined" 
              placeholder='characters'
              name="characters"
              value={characters}
              onChange={onChange}
              fullWidth
              />


            <div className='dddd' type='submit'>
            <IconButton disableTouchRipple className='marinColor' component='label' sx={{marginBottom: '10px'}}> 
              <input type='file' accept='image/*' onChange={obtenerNombre} ref={input} hidden />
              <span className='tamanoLetraImagen'>  
              <UploadFile sx={{color:'blue', marginRight: '10px'}}  />
                {
                  (nameImage.length === 0) 
                  ? 'Upload a file'
                  : nameImage
                }
              </span>
            </IconButton>
            </div>           
            <Button type='submit' disableTouchRipple variant="contained" sx={{width: '100%'}}>Hello World</Button>
            {/* <button type='submit' className='btn'>sdfsdf</button> */}
          </form> 
          </Grid>
        </Grid>

    </>
  )
}
