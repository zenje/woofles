import { LabelValue } from '../types';

type Props = {
  infoLabelValues: LabelValue[];
};

const DogProfileContent = ({ infoLabelValues }: Props) => {
  return (
    <div className="dog-profile-content">
      <div role="list">
        {infoLabelValues.map((labelValue) =>
          labelValue && labelValue.value ? (
            <div
              role="listitem"
              key={labelValue.label}
              className="dog-profile-detail-row"
            >
              <div className="spectrum-Detail spectrum-Detail--sizeXL">
                {labelValue.label}
              </div>
              <div className="dog-profile-detail-row-right">
                {labelValue.value}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default DogProfileContent;
