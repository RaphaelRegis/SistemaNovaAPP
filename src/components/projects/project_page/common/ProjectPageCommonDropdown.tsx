import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { sectionStyles } from "@/styles/projects/project_page/ProjectPage.style";

interface ProjectPageCommonDropdownProps {
    title: string;
    count?: number;
    onPress?: () => void;
    expanded?: boolean;
    chevron?: boolean;
}

export default function ProjectPageCommonDropdown({
    title,
    count,
    onPress,
    expanded,
    chevron,
}: ProjectPageCommonDropdownProps) {
    return (
        <TouchableOpacity
            style={sectionStyles.header}
            onPress={onPress}
            activeOpacity={chevron ? 0.7 : 1}
        >
            <View style={sectionStyles.headerLeft}>
                <Text style={sectionStyles.headerTitle}>{title}</Text>
                {count !== undefined && (
                    <Text style={sectionStyles.headerCount}>({count})</Text>
                )}
            </View>
            {chevron && (
                <Text style={sectionStyles.chevron}>{expanded ? '▲' : '▼'}</Text>
            )}
        </TouchableOpacity>
    );
}