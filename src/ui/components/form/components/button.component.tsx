import { useFormikContext } from 'formik';
import React, { useMemo } from 'react';
import { Button as BaseButton } from 'ui/components/common';
import { ButtonProps } from 'ui/components/common/button/button.typings';

export function Button(props: ButtonProps): React.ReactElement {
  const formik = useFormikContext();

  const disabled = useMemo(() => !formik.isValid, [formik.isValid]);
  const loading = useMemo(() => formik.isSubmitting, [formik.isSubmitting]);

  return <BaseButton disabled={disabled} loading={loading} {...props} />;
}
