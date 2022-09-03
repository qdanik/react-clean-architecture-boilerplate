import React, { useMemo } from 'react';
import { useFormState } from 'react-hook-form';

import { Button as BaseButton } from 'presentation/web/components/common';
import { ButtonProps } from 'presentation/web/components/common/button/button.types';

export function FormButton(props: ButtonProps): React.ReactElement {
  const formik = useFormState();

  const disabled = useMemo(() => !formik.isValid, [formik.isValid]);
  const loading = useMemo(() => formik.isSubmitting, [formik.isSubmitting]);

  return <BaseButton disabled={disabled} loading={loading} {...props} />;
}
