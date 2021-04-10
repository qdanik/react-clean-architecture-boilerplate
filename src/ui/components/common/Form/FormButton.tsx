import {useFormikContext} from 'formik';
import React, {useMemo} from 'react'
import {Button} from '../Button';
import {ButtonProps} from '../Button/types';

export function FormButton(props: ButtonProps): React.ReactElement {
  const formik = useFormikContext();

  const disabled = useMemo(() => !formik.isValid, [formik.isValid])
  const loading = useMemo(() => formik.isSubmitting, [formik.isSubmitting])
  
  return <Button disabled={disabled} loading={loading} {...props}/>
}