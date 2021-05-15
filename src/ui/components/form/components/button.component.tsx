import { Button as BaseButton } from '@app/ui/components/common';
import { ButtonProps } from '@app/ui/components/common/button/button.typings';
import { useFormikContext } from 'formik';
import React, { useMemo } from 'react';

export function Button(props: ButtonProps): React.ReactElement {
  const formik = useFormikContext();

  const disabled = useMemo(() => !formik.isValid, [formik.isValid]);
  const loading = useMemo(() => formik.isSubmitting, [formik.isSubmitting]);

  return <BaseButton disabled={disabled} loading={loading} {...props} />;
}
