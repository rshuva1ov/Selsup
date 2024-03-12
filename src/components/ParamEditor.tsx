import React from 'react';

interface Color {
    id: number;
    name: string;
}

interface Param {
    id: number;
    name: string;
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Model {
    paramValues: ParamValue[];
    colors?: Color[];
}

interface Props {
    params: Param[];
    model: Model;
}

interface State {
    paramValues: ParamValue[];
}

class ParamEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            paramValues: props.model.paramValues,
        };
    }

    handleChange = (paramId: number, value: string) => {
        const updatedParamValues = this.state.paramValues.map(paramValue => {
            if (paramValue.paramId === paramId) {
                return {
                    ...paramValue,
                    value,
                };
            }
            return paramValue;
        });

        this.setState({ paramValues: updatedParamValues });
    };

    getModel = () => {
        return { ...this.props.model, paramValues: this.state.paramValues };
    };

    render() {
        return (
            <div>
                {this.props.params.map(param => (
                    <div key={param.id}>
                        <label htmlFor={`param-${param.id}`}>{param.name}:</label>
                        <input
                            type="text"
                            id={`param-${param.id}`}
                            value={
                                this.state.paramValues.find(paramValue =>
                                    paramValue.paramId === param.id
                                )?.value || ''
                            }
                            onChange={(e) => this.handleChange(param.id, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default ParamEditor;