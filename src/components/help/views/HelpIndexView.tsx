import { GetCfhStatusMessageComposer } from '@nitrots/nitro-renderer';
import { FC } from 'react';
import { DispatchUiEvent, LocalizeText, ReportState, SendMessageComposer } from '../../../api';
import { Button, Column, Text } from '../../../common';
import { GuideToolEvent } from '../../../events';
import { useHelp } from '../../../hooks';

export const HelpIndexView: FC<{}> = props =>
{
    const { setActiveReport = null } = useHelp();

    const onReportClick = () =>
    {
        setActiveReport(prevValue =>
        {
            const currentStep = ReportState.SELECT_USER;

            return { ...prevValue, currentStep };
        });
    }

    return (
        <>
            <Column gap={ 1 }>
                <Text fontSize={ 3 }>{ LocalizeText('help.main.frame.title') }</Text>
                <Text>{ LocalizeText('help.main.self.description') }</Text>
            </Column>
            <Column gap={ 1 }>
                <Button onClick={ onReportClick }>{ LocalizeText('help.main.bully.subtitle') }</Button>
                <Button onClick={ () => DispatchUiEvent(new GuideToolEvent(GuideToolEvent.CREATE_HELP_REQUEST)) }>{ LocalizeText('help.main.help.title') }</Button>
                <Button disabled={ true }>{ LocalizeText('help.main.self.tips.title') }</Button>
                <Button variant="link" className="text-black" onClick={ () => SendMessageComposer(new GetCfhStatusMessageComposer(false)) }>{ LocalizeText('help.main.my.sanction.status') }</Button>
            </Column>
        </>
    )
}
