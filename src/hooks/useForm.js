import React, { useState } from 'react';

export const useForm = (initialForm = {}) => {

    const [useForm, setUseForm] = useState(initialForm);    

    const onChange = ({target}) => {
        const { name, value} = target;
        setUseForm({
            ...useForm,
            [name]: value,
        });
    }

    const useReset = () => {
        setUseForm(initialForm);
    }

    return {
        ...useForm,
        onChange,
        useReset
    }
}
